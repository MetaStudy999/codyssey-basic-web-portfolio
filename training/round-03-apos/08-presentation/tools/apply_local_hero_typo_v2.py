#!/usr/bin/env python3
"""Fail-closed, reversible SL02 Hero Korean word-break correction for owner WSL2 local previews.

Updates only BOTH local preview CSS files and persistent sync overlay (patch digest).
No GitHub push/merge, no JS changes, no source downloads, no external requests.
Run separately from a shell with the existing 8765/8766 local server processes running.
"""
from pathlib import Path
import hashlib
import json
import os
import shutil
import subprocess
import sys
from datetime import datetime, timezone

MARKER = 'SL02-HERO-TYPO-FIX-V2'
PREVIEW_BASE = '8059498326c4cbfb5ab35e0da7ca32a0e243538f'
BRANCH = 'feat/b1-1-round03-bonus-repair-20261009'
SITE = Path('training/round-03-apos/04-src')
STYLE = SITE / 'css/style.css'
HTML = SITE / 'index.html'
JS = SITE / 'js/main.js'
BLOCK = '''
/* SL02-HERO-TYPO-FIX-V2 | Korean words remain intact at 320-1440px. */
.hero h1 {
  word-break: keep-all;
  overflow-wrap: normal;
  line-break: strict;
  text-wrap: pretty;
  max-width: min(100%, 700px);
  font-size: clamp(2.1rem, 4.3vw, 4.25rem);
}
@media (max-width: 767px) {
  .hero h1 {
    max-width: 100%;
    font-size: clamp(1.9rem, 7.4vw, 2.72rem);
    letter-spacing: -.045em;
  }
}
'''


def digest(data):
    return hashlib.sha256(data).hexdigest()


def checked(command, cwd=None):
    result = subprocess.run(command, cwd=cwd, capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError(f"{command[0]} 실패: {(result.stderr or result.stdout).strip()[:300]}")
    return result.stdout.strip()


def safe_write(path, data):
    tmp = path.with_name(path.name + '.tmp-hero-v2')
    if tmp.exists():
        raise RuntimeError(f"이전 임시파일 발견: {tmp}")
    try:
        tmp.write_bytes(data)
        os.replace(tmp, path)
    finally:
        if tmp.exists():
            tmp.unlink()


def main():
    home = Path.home() / 'projects'
    preview = home / 'b1-1-preview'
    sync = home / 'b1-1-sync'
    cfgpath = sync / 'config.json'
    overlay = sync / 'overlay/sl02-design.patch'
    current = sync / 'current'
    if not current.is_symlink():
        raise RuntimeError('8766 current 심볼릭 링크가 아닙니다. 작업을 중단합니다.')
    managed_site = current.resolve(strict=True)
    releases_root = (sync / 'releases').resolve()
    if releases_root not in managed_site.parents:
        raise RuntimeError('8766 대상이 관리형 releases 외부입니다. 작업을 중단합니다.')
    managed_css = managed_site / 'css/style.css'
    preview_css = preview / STYLE
    for p in (preview_css, managed_css, cfgpath, overlay, preview / HTML, preview / JS):
        if not p.is_file():
            raise RuntimeError(f'필수 파일 없음: {p}')
    if checked(['git','rev-parse','HEAD'], cwd=preview) != PREVIEW_BASE:
        raise RuntimeError('8765의 Git HEAD가 검증된 PR #19 버전과 다릅니다')
    if checked(['git','branch','--show-current'], cwd=preview) != BRANCH:
        raise RuntimeError('8765의 Git 브랜치가 기대값과 다릅니다')
    cfg = json.loads(cfgpath.read_text())
    if cfg.get('branch') != BRANCH or cfg.get('baseline') != PREVIEW_BASE:
        raise RuntimeError('로컬 싱크 설정과 기준 버전이 다릅니다')
    old_patch = overlay.read_bytes()
    if digest(old_patch) != cfg.get('overlay_sha256'):
        raise RuntimeError('보존된 SL02 패치 해시가 설정과 일치하지 않습니다')
    old_css = preview_css.read_bytes()
    if old_css != managed_css.read_bytes():
        raise RuntimeError('8765와 8766의 CSS가 서로 다릅니다. 먼저 원인을 확인하세요')
    current_text = old_css.decode('utf-8')
    if 'SL02-DESIGN-PREVIEW-V1' not in current_text:
        raise RuntimeError('검증된 SL02 디자인 패치 식별자가 없습니다')
    if MARKER in current_text:
        if MARKER not in old_patch.decode('utf-8'):
            raise RuntimeError('타이포 수정은 있으나 싱크 패치에 없습니다. 자동 진행 금지')
        print('ALREADY_APPLIED: V2 타이포 수정이 양쪽에 적용되어 있습니다')
        return
    if 'word-break: keep-all' in current_text:
        raise RuntimeError('다른 타이포 수정이 이미 있으므로 충돌 가능성을 확인하세요')
    if 'class="typing-target"' not in (preview / HTML).read_text():
        raise RuntimeError('Hero 제목의 DOM 구조가 변경되었습니다')
    if digest((preview / JS).read_bytes()) != digest((managed_site / 'js/main.js').read_bytes()):
        raise RuntimeError('두 미리보기의 main.js가 다릅니다')

    backups = sync / 'backups'
    backups.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ')
    folder = backups / f'hero-typo-v2-{stamp}'
    if folder.exists():
        raise RuntimeError('백업 폴더 이름 중복입니다')
    folder.mkdir()
    (folder / 'style.css.before').write_bytes(old_css)
    (folder / 'sl02-design.patch.before').write_bytes(old_patch)
    (folder / 'config.json.before').write_bytes(cfgpath.read_bytes())

    updated = (current_text.rstrip() + '\n' + BLOCK).encode('utf-8')
    try:
        safe_write(preview_css, updated)
        safe_write(managed_css, updated)
        patch_text = checked(['git','diff','--binary','HEAD','--',str(HTML),str(STYLE)],cwd=preview)
        if MARKER not in patch_text or 'SL02-DESIGN-PREVIEW-V1' not in patch_text:
            raise RuntimeError('Git 변경 패치에 필수 마커가 없습니다')
        patch_new = (patch_text + '\n').encode('utf-8')
        safe_write(overlay, patch_new)
        cfg['overlay_sha256'] = digest(patch_new)
        cfg['hero_typography_patch'] = MARKER
        safe_write(cfgpath, (json.dumps(cfg,ensure_ascii=False,indent=2)+'\n').encode('utf-8'))
        checked(['node','--check',str(preview / JS)])
        checked(['git','diff','--check'],cwd=preview)
        if preview_css.read_bytes() != managed_css.read_bytes():
            raise RuntimeError('적용 후 CSS 파일 바이트 불일치')
        if digest(overlay.read_bytes()) != json.loads(cfgpath.read_text())['overlay_sha256']:
            raise RuntimeError('업데이트용 영구 패치 해시 검사 실패')
    except BaseException:
        safe_write(preview_css, (folder / 'style.css.before').read_bytes())
        safe_write(managed_css, (folder / 'style.css.before').read_bytes())
        safe_write(overlay, (folder / 'sl02-design.patch.before').read_bytes())
        safe_write(cfgpath, (folder / 'config.json.before').read_bytes())
        raise
    print('RESULT: LOCAL_HERO_TYPO_STATIC_PASS')
    print('8765/8766 CSS SHA256:',digest(updated))
    print('기존 JavaScript 수정 없음 / Git commit·push 없음')
    print('원복 백업:',folder)
    print('다음: bash ~/projects/b1-1-qa/run_qa.sh (35개 기능 검증)')
    print('주의: 실제 5개 해상도 시각 검사는 별도 Playwright 재실행 필요')


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print(f'FAIL_CLOSED: {error}',file=sys.stderr)
        sys.exit(2)