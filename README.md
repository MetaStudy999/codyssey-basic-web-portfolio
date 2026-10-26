# CODYSSEY B1-1 — 나를 소개하는 웹페이지 처음부터 만들기

> **현재 신규 미션: `training/round-04-agent/` (2026-10-25 지정).** 이 저장소의 루트 웹페이지는 **현재 미션 상태를 알리는 안내 페이지**입니다. 실제 신규 B1-1 구현 코드는 아직 작성하지 않았으며, 사용자 별도 개발 승인 전까지 PLAN_ONLY / NOT_STARTED입니다.

## 입문자라면 여기부터 시작하세요

**B1-1의 현재 신규 작업은 00단계 계획 문서 PASS, 01단계 미시작입니다.** 새 웹페이지 구현과 실제 교육자료는 아직 작성하지 않았습니다.

- [① 3분 요약·그림·추천 학습 순서·쉬운 용어·확인 문제](training/round-04-agent/00-plan/README.md)
- [② 00단계 Mermaid 입문 설명서](training/round-04-agent/00-plan/STAGE-00-MERMAID-GUIDE.md)
- [③ 현재 완료/미완료 표](training/round-04-agent/00-plan/STATUS.md)

## 1. 현재 미션 (새로운 작업)

- 미션 번호: **B1-1**
- 미션 제목: **나를 소개하는 웹페이지 처음부터 만들기**
- 공식 기준: 제2기 B1-1 Mission PDF 및 `responsive_web_javascript.md` 평가 체크리스트
- 개발 주도: ChatGPT
- 실행 및 검증: Agent Codyssey MCP → Windows 11 Pro / WSL2 Ubuntu → Codex
- 신규 계획·관리: [`training/round-04-agent/`](training/round-04-agent/README.md)
- **신규 미션 소스 전용 위치:** [`training/round-04-agent/04-src/`](training/round-04-agent/04-src/README.md)
- 기존 구현 복사: **하지 않음**
- 신규 소스 실행·브라우저 검증·배포: **NOT_STARTED / NOT_VERIFIED**
- 신규 미션 완료: **NOT_VERIFIED**
- AWS·Discord·iMac: 현재 범위 제외

이번 `main` 게시 승인은 **기존 루트 자료 정리, 이전 차수 자료 보존, 신규 미션 상태 안내 게시**에 한정됩니다. 실제 B1-1 코드를 새로 구현하거나 최종 완료한 것이 아닙니다.

## 2. 기존 차수 기록 (읽기 전용 참고)

| 차수 | 위치 | 실제 역할 |
|---|---|---|
| 과거 초기 레퍼런스 | [`training/round-01-clear/`](training/round-01-clear/README.md) | 초기 참고 구현과 미션 문서, 과거 B4-1 명칭 |
| 기존 Round 01 실행 화면 | [`legacy/round-01-portfolio/`](legacy/round-01-portfolio/index.html) | 이전 웹사이트 복사본 |
| 기존 Round 02 | [`training/round-02-clear/`](training/round-02-clear/README.md) | 구현·시험·증빙·평가·발표 이력 |
| 기존 Round 03 | [`training/round-03-apos/`](training/round-03-apos/README.md) | 이전 완성 소스·브라우저 검증·배포 이력 |
| **신규 Round 04 Agent** | [`training/round-04-agent/`](training/round-04-agent/README.md) | **새로운 시작, 계획 및 승인 대기** |

- 이전 Round 03 작동 화면: [GitHub Pages](https://metastudy999.github.io/codyssey-basic-web-portfolio/training/round-03-apos/04-src/)
- 기존 1기 원본 화면: [GitHub Pages](https://metastudy999.github.io/codyssey-basic-web-portfolio/legacy/round-01-portfolio/)
- 기존 루트 자료·SHA-1 비교 결과: [`LEGACY-SOURCE-INVENTORY.md`](training/round-04-agent/00-plan/LEGACY-SOURCE-INVENTORY.md)
- 이전 루트 소개문 원본 보존: [`training/round-02-clear/docs/ROOT-README-HISTORICAL-20261025.md`](training/round-02-clear/docs/ROOT-README-HISTORICAL-20261025.md)
- 이전 배포용 루트 HTML 원본 보존: [`training/round-03-apos/09-handoff/ROOT-INDEX-HISTORICAL-20261025.html`](training/round-03-apos/09-handoff/ROOT-INDEX-HISTORICAL-20261025.html)

이전 구현의 PASS / CLEAR는 **해당 차수 당시 검증 기록**입니다. 신규 Round 04 Agent의 구현과 검증을 대체하지 않습니다.

## 3. 루트 자료 정리 방식

- 과거 번호 `b4-1-mission.pdf`, `b4-1-mission.md`, `b4-1-evaluation.md`: 원본을 `training/round-01-clear/legacy-official/`에 동일 Git Blob으로 보존하고, 기존 링크 호환을 위해 루트 원본은 유지합니다.
- 루트의 `css/style.css`, `js/script.js`, `images/profile-placeholder.svg`는 `legacy/round-01-portfolio/`와 내용 해시가 정확하게 일치하며, 과거 참조 URL 호환용으로 유지합니다.
- 이전 루트 `index.html`, `README.md`, `WORKING-RULES.md`를 해당 Round의 보존 폴더에 원문 그대로 복사한 뒤 현재 루트 안내를 갱신합니다.
- 새 B1-1 소스는 이전 코드 복제나 자동 승격 없이 `training/round-04-agent/04-src/`에서 별도로 시작합니다.
- `.github/`, Git 설정 파일 및 이전 Git 브랜치·커밋은 그대로 유지합니다.

## 4. 신규 미션을 시작할 때

1. [신규 계획 폴더](training/round-04-agent/00-plan/README.md)와 공식 평가 기준을 확인합니다.
2. 기존 자료는 **비교·참고만** 수행합니다.
3. 사용자로부터 **개발 시작 명시적 승인**을 받습니다.
4. 승인 후 `04-src/`에 신규 HTML·CSS·JavaScript를 구현합니다.
5. `05-tests/` → `06-evidence/` → `07-evaluation/` → `08-presentation/` → `09-handoff/` 순서로 진행합니다.
6. 실제 검증에 근거하여 PASS / FAIL / NOT_VERIFIED를 기록합니다.

[운영 규칙](WORKING-RULES.md) · [현재 미션 메타데이터](MISSION-METADATA.yml) · [중앙 미션 관리](https://github.com/MetaStudy999/codyssey-basic/tree/main/training/round-04-agent)
