# B1-1 작업 운영 규칙 — 신규 Round 04 Agent

> 기준일: 2026-10-25. **현재 미션 신규 작성 루트:** `training/round-04-agent/` / **코드 작성:** `training/round-04-agent/04-src/`.

## 1. 원본 우선순위

공식 제2기 B1-1 Mission PDF → 공식 `responsive_web_javascript.md` 평가표 → 현재 미션 계획·승인 → 신규 작성 코드·실제 실행 증빙 → 과거 Round 01~03 참고자료.

기존 미션의 이름 `B4-1`은 과거 번호로만 보존합니다.

## 2. 기존·신규 완전 분리

- 기존 Root/ `legacy/round-01-portfolio/` / `training/round-01-clear/` / `round-02-clear/` / `round-03-apos/`: **변경 금지, 참고·보존**.
- **이번 사용자 지시로 승인된 예외:** 기존 루트 문서·상태 페이지를 Round 04에 맞춰 재정리하고, 동일 해시의 과거 자료를 해당 Round에 보존한 뒤 `main`에 반영합니다.
- `training/round-04-agent/04-src/`: 신규 미션 코드를 **빈 작업 공간에서 새로 작성**합니다. 이전 코드·테스트·PASS를 복사해 새 구현으로 주장하지 않습니다.
- 이번 문서/루트 갱신 승인은 신규 미션 소스 개발·실행·평가·배포를 자동으로 허가하지 않습니다.

## 3. 단계별 경로

`00-plan/` 계획 → `04-src/` 새 코드 → `05-tests/` 시험 → `06-evidence/` 증빙 → `07-evaluation/` 공식 평가 → `08-presentation/` PPTX/PDF → `09-handoff/` 완료 보고.

## 4. 실행·판정 기준

ChatGPT 개발 총괄 → Agent Codyssey MCP Core 도구 → Windows 11 Pro / WSL2 Ubuntu / Codex. 기존 정상 동작은 존중하며, 실제 오류에 한해 최소 수정합니다. 승인되지 않은 Cloud Run·권한·토큰·비밀정보·AWS·Discord·iMac 관련 변경 금지.

과거 PASS / CLEAR는 과거 사실일 뿐입니다. 새 Round 04에서 실행·검증하지 않은 항목은 **NOT_VERIFIED**입니다. 기본 브랜치 병합·프로덕션 변경은 사용자 승인 범위에 한정합니다.

[현재 작성 경로](training/round-04-agent/README.md) · [기존 자료 정리 내역](training/round-04-agent/00-plan/LEGACY-SOURCE-INVENTORY.md)
