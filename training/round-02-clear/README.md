# B1-1 Round 02 — 나를 소개하는 웹페이지 처음부터 만들기

> **기준 레포(Canonical Control Repository):** [MetaStudy999/codyssey-basic](https://github.com/MetaStudy999/codyssey-basic)  
> **현재 작업 위치:** `training/round-02-clear/`  
> **기존 참고자료:** `training/round-01-clear/`

## 현재 미션 식별

- 현재 Mission ID: **B1-1**
- 현재 제목: **나를 소개하는 웹페이지 처음부터 만들기**
- Repository: `MetaStudy999/codyssey-basic-web-portfolio`
- 과거 Mission ID: `B4-1`
- 기존 평가자료: 기존 `b4-1-evaluation.md` 참고

현재 번호·제목·공식 요구사항은 **제2기 현재 Mission PDF**를 최우선으로 사용한다. Repository의 과거 번호 파일은 동일 주제의 1기 참고자료로 사용한다.

## 초압축 시간 예산

- 구분: **필수**
- 제2기 PDF 공식 학습시간: **80시간**
- Round 02 내부 초압축 목표: **9시간**
- 전체 계획: [2주 초압축 수행 계획](https://github.com/MetaStudy999/codyssey-basic/blob/main/training/round-02-clear/ACCELERATED-2WEEK-PLAN.md)

초압축 목표는 공식 학습시간이나 요구사항을 줄이는 기준이 아니다. `round-01-clear` 재사용, 중복 제거, 최소 통과 경로 집중으로 시간을 줄인다. 실제 Runtime, Verification, Evidence, Secret 점검, 평가 설명은 생략하지 않는다.

## 기준 우선순위

```text
제2기 현재 Mission PDF
→ 제2기 오리엔테이션 PDF
→ 기존 Mission
→ 기존 Evaluation
→ training/round-01-clear
→ 일반 지식·외부 자료
```

공통 운영 기준:
[ROUND-02-MISSION-EXECUTION-STANDARD.md](https://github.com/MetaStudy999/codyssey-basic/blob/main/standards/ROUND-02-MISSION-EXECUTION-STANDARD.md)

## 가장 효율적인 진행

```text
1. 현재 미션 기준 확정
2. 평가항목 먼저 정리
3. 최소 통과 경로 확정
4. 필요한 개념만 적시 학습(JIT Learning)
5. 한 단계씩 실제 수행
6. 검증하면서 Evidence 동시 확보
7. 평가 설명 준비
8. 모의평가 후 최종 CLEAR 점검
```

## 현재 진행 상태

- Gate 1 — 기준 확정: **완료**
- Gate 2 — 평가항목 연결: **완료**
- Gate 5 — 실행환경 Preflight: **진행 중**
- 실제 개발 환경: **학교 iMac → OrbStack → Ubuntu 24.04.5 LTS**
- 현재 사용자: `metastudy9997479`
- 셸: `/bin/bash`
- 패키지 관리자: `apt`
- Git: **설치 완료 — 2.43.0 (`/usr/bin/git`)**
- B1-1 로컬 Repository: **clone 완료 — `/home/metastudy9997479/projects/codyssey-basic-web-portfolio`**
- 코드 구현/수정: **아직 시작하지 않음**
- Runtime/Evidence: **아직 없음**

실행환경의 실제 확인 명령과 출력은 [environment/README.md](environment/README.md)에 누적 기록한다.

## Round 02 원칙

- Round 01을 삭제·덮어쓰기하지 않는다.
- Round 01의 PASS/Evidence를 Round 02 실제 PASS로 대신하지 않는다.
- 사용자의 실제 실행 결과 없이 PASS/CLEAR를 기록하지 않는다.
- 선택 고도화와 대규모 리팩터링은 필수 요구 완료 뒤로 미룬다.
- 평가 답변은 `WHAT → WHY → HOW → VERIFY → LIMITATION` 구조로 준비한다.
- Secret, Token, Password, Private Key는 Repository·Chat·Evidence에 남기지 않는다.

## 구현 진행 상태

- 기본 웹 구조 생성: **PASS**
- 시맨틱 HTML 구조: **PASS**
- CSS 기본 스타일/반응형 정적 검증: **PASS**
- JavaScript Event/State/Render 정적 검증: **PASS**
- Contact Form 1차 검증: **FAIL → 원인 진단 → 최소 수정 → 정적 재검증 PASS**
- GitHub API 상태 흐름 정적 검증: **PASS**
- Local HTTP Server Runtime: **PASS**
- Browser Initial Runtime: **PASS**
- Dark Mode + localStorage Runtime: **PASS**
- Mobile Hamburger Runtime: **PASS**
- Scroll State Runtime: **PASS**
- Contact Form Runtime: **PASS**
- GitHub API Success/Reload Runtime: **PASS**
- GitHub API Error/Retry Runtime: **PASS**
- GitHub API Empty Runtime: **PASS**
- GitHub API 전체 상태 Runtime: **PASS**
- Responsive Runtime: **PASS**
- IntersectionObserver Runtime: **PASS**
- 실제 구현 파일: `index.html`, `css/style.css`, `js/script.js`, `images/`
- 구현 로그: `docs/implementation-log.md`
- 다음 구현: `index.html` 시맨틱 구조

## 다음 원격 반영 절차

- GitHub CLI(gh) 설치: **PASS** (`2.45.0`)
- 웹 브라우저 방식으로 GitHub 인증: **PASS** (`MetaStudy999`)
- `gh auth status` 검증
- 인증 확인 후 Round 02 작업 브랜치 push
- Secret/Token은 Chat·Repository·Evidence에 기록하지 않음

## 다음 작업

현재 환경 확인, Git 설치/검증, B1-1 Repository clone 및 원격·브랜치·작업트리 상태 확인까지 완료했다. Git 작성자 전역 설정은 둘 다 UNSET이었고, 학교 공유 환경을 고려하여 현재 B1-1 Repository에만 로컬 작성자 정보를 설정했다. `user.name`과 `user.email` 모두 SET이며 실제 값은 기록하지 않았다. 원격 `main` 동기화와 `round-02/b1-1-web-portfolio` 작업 브랜치 생성까지 완료했다. 원격에도 동일한 Round 02 작업 브랜치를 준비했다. Gate 2에서 공식 요구사항과 기존 Evaluation을 비교하고 `docs/requirements-mapping.md`에 Requirement → Implementation → Verification → Evidence → Evaluation 연결을 정리했다. Gate 3에서 필수 구현 범위, 검증 순서, 최소 Evidence, CLEAR 이후로 미룰 항목, 구현 순서를 `docs/minimum-passing-path.md`에 확정했다. Gate 4 학습자료를 `docs/jit-learning.md`에 준비했다. 다음 실제 단계는 **핵심 개념을 자기 말로 설명할 수 있는지 확인한 뒤 실제 구현 위치를 확정**하는 것이다.

```bash
cd "$HOME/projects/codyssey-basic-web-portfolio"

git switch main
git fetch origin
git pull --ff-only origin main

git switch -c round-02/b1-1-web-portfolio

echo "=== CURRENT BRANCH ==="
git branch --show-current

echo "=== STATUS ==="
git status --short

echo "=== HEAD ==="
git log -1 --oneline
```

위 동기화 및 브랜치 생성은 아직 실제 결과가 없으므로 PASS 처리하지 않는다.


## GitHub 원격 반영 상태

- GitHub CLI 설치: **PASS**
- GitHub CLI 인증: **PASS**
- Remote Push Runtime: **PASS**
- Local HEAD = Remote HEAD: `c204364`
- 현재 작업 브랜치: `round-02/b1-1-web-portfolio`
- 구현 파일과 Round 02 Evidence가 원격 브랜치에 반영됨


## Root README 상태

- Root README Update/Push: **PASS**
- Commit: `07f3b03`
- 현재 제2기 B1-1 기준 설명으로 전환 완료
- Legacy B4-1 / Round 01 자료는 보존
- 다음 단계: GitHub Pages 상태 확인 및 배포


## GitHub Pages 배포

- GitHub Pages HTTP Deployment: **PASS**
- URL: `https://metastudy999.github.io/codyssey-basic-web-portfolio/`
- Source: `main:/`
- HTML/CSS/JS HTTP: `200`
- 실제 Browser Runtime 재검증: **PASS**


## GitHub Pages Browser Runtime

- GitHub Pages Browser Runtime: **PASS**
- 기본 화면: 정상
- Dark Mode + 새로고침 유지: 정상
- GitHub Projects API + 재로딩: 정상
- Mobile 375px + Hamburger: 정상
- Contact / Scroll / Reveal: 정상


## Screenshot Evidence

- Screenshot Capture: **PASS**
- Desktop Light: 촬영 완료
- Mobile 375px: 촬영 완료
- Desktop Dark: 촬영 완료
- Evidence 디렉터리 복사 및 Git 기록: **PENDING**


- Screenshot Source Path Discovery: **PASS**
- Mac Desktop → OrbStack mount: `/mnt/mac/Users/metastudy9997479/Desktop/`


- Screenshot Evidence Import: **PASS**
- 3개 Screenshot 파일 존재/크기/SHA-256 확인 완료
- Python 표준 라이브러리로 PNG Signature/IHDR 검증 완료
- Git 기록: **PENDING**


- Desktop Light PNG: **PASS** (2324×2280)
- Mobile 375px PNG: **PASS** (752×2044)
- Desktop Dark PNG: **PASS** (2334×2380)
- PNG Signature/IHDR: **PASS**
- Screenshot Evidence Git Commit/Push: **PASS** (`c77217c`)


- Screenshot Evidence 원격 확인: **PASS**
  - `b1-1-pages-desktop-light.png`
  - `b1-1-pages-mobile-375.png`
  - `b1-1-pages-desktop-dark.png`


## Gate 6 보완 — Dynamic HTML

- innerHTML Dynamic HTML Static Verification: **PASS**
- Template Literal Dynamic HTML: **PASS**
- 삽입 값: `items.length` 숫자만 사용
- Browser Runtime 재검증: **PASS**


- innerHTML Runtime Recheck: **PASS**
- Projects count render: **PASS** (`8개 공개 프로젝트`)
- Reload recovery: **PASS**
