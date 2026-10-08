# Round 03 단계별 인수인계 — 독립 설정 Pilot

## P0 OWNER HANDOFF — 평가자 앞에서 이해·시연·설명까지 실제 완료 (2026-10-09)

> **Owner가 통보한 공식 기한 2026-10-31.** 기존 문서 정리/하네스 설계보다 B1-1 과제 완수와 발표·구술·실기 준비가 우선이다. 이 인계의 목적은 **실제 이미지 슬라이드와 사용자의 설명 능력**이다. 현재 상태: `NOT_READY_FOR_EVALUATOR`. 중복 계획/새 프레임워크 구축부터 시작 금지.

### 1. 확정된 사실 / 구별해야 할 상태

- **공식 평가** `07-evaluation/OFFICIAL-EVALUATION-CHECKLIST.md`: EV01~EV15 = 기능5, 구조4, 개념4, 확장2. 문항·코드 경로 연결 15/15은 문서상 사실이나 **Owner 독립 구술/시연/정식 평가 결과는 NOT_MEASURED**.
- 기존 CORE `main=da8822cbbe54c47539f65571327e324ce675eeb4` (완료 이력)와 선택 BONUS 후보 [PR #19](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/pull/19), SHA `8059498326c4cbfb5ab35e0da7ca32a0e243538f` 구별. PR #19 Chromium [Run 37853333536](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/actions/runs/37853333536) 25/25은 **MOCKED GitHub API / MOCKED Formspree POST 기반 자체 테스트**; 실제 발송·메일 수신은 미확인, 실제 배포 및 독립 QA도 미실시.
- [PR #16](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/pull/16) (Harness) → [PR #18](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/pull/18) (학습/평가·감사) → [PR #20](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/pull/20) (Golden Slide 검증기)은 **Draft 인계 체인**. PR #19는 main에서 별도 분기. 이들의 후보 코드 버전, 해시 고정 검증 및 합류 충돌을 QA 없이 자동 병합하지 않는다.
- 17장 검토본은 사용자 결정 D01~D14/Golden 10 Gate 기준 **최종 불합격**. 4장 Golden v3 이미지 대표 시안은 **시각 샘플**이지 공식 질문의 전체 학습·발표본이 아니다. `08-presentation/manifest.json` `deliverables`는 null, `slides=[]`, Golden G1~G10 NOT_MEASURED, `release_eligible=false`, Hermes 실사용 NOT_VERIFIED. 검증기 통과를 슬라이드 통과로 표시 금지.

### 2. 실제 제작 작업 — 이 순서로 멈추지 않고 수행

**A. 학습자가 말로 이해할 수 있는 내용 잠금 (1회만).** 공식 평가 15문항을 읽고 질문마다 `쉬운 비유 1문장 → 정확한 정의 1문장 → 실제 함수/코드 위치 → 실제 화면에서 30초 시연 → 이유·오류·한계 → 예상 추가 질문 1개`를 만든다. 말할 내용은 평가자가 듣고 이해할 수준의 자연스러운 한국어여야 한다. **예: EV10 테마 버튼** `클릭 → addEventListener → setTheme() → STATE.theme/localStorage → renderTheme() → 화면 변경`(main 기준), 새 PR#19에서는 `STATE.themePreference / resolveTheme()`로 변화. **반드시 발표 후보 SHA에 맞는 한 버전만 슬라이드에 사용.**

**B. 기존 Golden 디자인과 실제 증빙을 이용해 발표·학습을 동시에 제작.** `codyssey-basic/standards/PRESENTATION-CANONICAL-DECISIONS.md` D01~D14 우선. 기존 Golden v2/45장 로드맵은 **디자인 참고로만**, 기존 Round02 Code/Evidence는 새 Round03 실증이 아니다. 시네마틱 산악 여정·Navy/Cyan/Amber, 이미지 중심/적은 텍스트. **4컷 비유 → 실제 Mermaid/기술 다이어그램 → 소스의 정확한 코드 → 실제 브라우저 캡처 → 30초 발표·직접 실습**을 최소 핵심 개념(이벤트/상태, API 비동기, 오류·복구)에 구성한다.
 
**C. 단일 제작 파이프라인으로 한 번만 생성·재사용.** 30~45장 학습 마스터의 *작은 장면 그룹을 순차 완성*하면서 거기서 짧은 발표 14~16장을 고른다. 함께 상세 학습 Appendix 15~25장과 1장 Quick Review, 발표 대본/노트, 1~3분 라이브 Demo Runbook을 생산한다. 큰 Deck 완료까지 평가 연습을 기다리지 말고 첫 장면 그룹부터 즉시 말하기를 실행한다. 새 도구/브랜드/대시보드를 만드는 일을 이 작업보다 우선하지 않는다.

**D. 이미지로 Owner 실물 검토 먼저.** 다음 Maker 실행의 최초 구체적 전달물: `시네마틱 표지 1장 + 진짜 4컷 만화 1장 + 해당 개념의 기술 다이어그램 1장 + PR HEAD 정확한 코드/Runtime 합성 1장 + EV01~EV15 진도 한눈에 보는 학습·평가 맵 1장`. 사용자에게 실제 풀사이즈 이미지를 먼저 보여 주고 피드백 기록. 기획서/PR 생성은 실물 산출물로 계산하지 않는다.

**E. 제출 수준 검증.** Slide ID ↔ 공식 EV01~EV15 또는 BONUS01~04 ↔ 정확한 후보 File/Function ↔ Test SHA/Run/Artifact ↔ 실제 Screenshot ↔ 본인 구술 질문/대본을 모두 채워야 한다. 슬라이드 전체 16:9 1920x1080+ 실제 렌더에서 가독성과 기술 명칭을 점검. G1~G10의 자동 체크 + 독립 시각 QA_SEC 및 Owner 검토를 분리. 실제 수신하지 않은 메일, MOCK API 등은 REAL PASS로 금지. Hermes는 실제 등록/호출 증거 없이 `HERMES_APPLIED` 금지.

### 3. 평가 준비 종료 기준 (문서/CI가 아니라 사용자 행동)

- **직접 시연**: 반응형, 메뉴/스크롤, 테마, GitHub API 로딩/정상/오류/빈 상태, 폼 검증을 사용자가 재현. 공개 API 모의/실서비스 상태 구별.
- **15문항 구술**: 공식 체크리스트 각 문항에서 `WHAT→WHY→HOW→VERIFY→LIMITATION`을 한 번 직접 대답하고, 자신이 가리킨 코드·슬라이드가 정확한지 확인. 막힌 문제는 도움 수준 기록 후 복습. 출석/공식 합격은 운영기관 판정 별도.
- **Slide 실제 파일**: 연구/학습본, 발표본, 부록, 1장 복습표 및 Speaker Notes/Demo Runbook 실물 확인; QA 완료 전 `FINAL` 표기 금지.
- **10월 31일 기한**: 학교 현장 평가·팀 협력·공식 제출 날짜와 수행 가능 환경을 가장 먼저 확인하고, 학교 접근 상실 대비 집 장치/클라우드에서 승인된 범위만 이어서 진행.

### 4. 다음 세션 첫 응답 계약

사실 재조회 → 기존 파일 재사용 → **실제 이미지/코드/검증 화면** 제시 → Owner 30초 구술 연습 1문항 → 수정·재검증. 작업이 멈춘 이유/실물 링크/다음 행동을 짧게 보고한다. 하네스 검증 PASS만 재설명하는 반복 창은 금지.

---



이하 내용은 **이전 Harness Pilot 이력(역사 기록)**으로 보존한다. **현재 최우선 작업 및 다음 창 지시 범위는 상단 `P0 OWNER HANDOFF`가 우선한다.**

당시 작업 단위: **독립적인 Round 03 Mission Workspace 구조 설정과 누락 조사**.

## 이미 확정된 실제 사실
- Repository: `MetaStudy999/codyssey-basic-web-portfolio`
- `main` final CLEAR merge baseline: `da8822cbbe54c47539f65571327e324ce675eeb4`
- Runtime tested candidate: `95b5dd8283a611e27c0c0a9185060a213e53ada9`
- CORE 및 최소 학습 설명 PASS; 선택 BONUS, 발표, 새 성능 벤치마크는 미완료
- `04-src/` 기존 실행 소스는 구조정리 중 수정하지 않음

## 현재 차례
1. 새 폴더·독립 문서 작성 — MAKER
2. 본 변경 후보가 문서/색인에만 국한됐는지 검증
3. Independent QA_SEC (새 후보 HEAD 기준)
4. 정책에 따라 merge + 후속 검증
5. 한 미션에서 계측/학습 루프 실험 → 다른 도메인 미션에 적용·비교

## 다음에 재확인할 사항
- 현재 main과 PR HEAD(계획 시의 값을 그대로 최신이라고 가정하지 않음)
- 문서 내부 링크 / 날짜 / Run / Artifact / SHA
- 증빙 Artifact 만료 및 승인된 보존 전략
- 발표자료와 사용자 실기 재현 준비
- APOS 및 CODYSSEY 중앙 Control 상태 동기화(별도 저장소별 별도 작업)

## 금지
과거 수행본 복사, 자동으로 PASS 확대, 불필요한 코드 재개발, 다른 14개 미션 일괄 변경, 보안 우회.


## 검증 인수인계
- 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 단계별로 점검한다.
- CHECK_03 PASS 후 CHECK_04 실제 브라우저/05 독립 화면/08 독립 QA는 자동 완료로 기록하지 않는다.
- 새 PR HEAD에서는 이전 exact-head QA/CI를 재사용하지 않는다. 안전한 경계에서 다음 작업을 넘긴다.

## 2026-10-08 신규 검증기 첫 실제 실행 이력
- PR #16: Draft / Maker Candidate, 독립 QA_SEC는 아직 하지 않음.
- CI 최초 실행 Run 37780357572: FAIL (최상위 AGENTS.md Exit Gate 제목 검사 누락) — 확인/복구 완료.
- 수정 후보 2b2755f265938110a45d123778709073e9a361c5: 정확한 체크아웃 SHA 확인.
- CI Run 37780601556: SUCCESS, 테스트 6/6, 정적·출처 검사 43/43, 실패 0.
- 상기 CI는 신규 Chromium 실브라우저 실행이나 독립 QA가 아니라 정적 계약+출처 검사만 수행.
- 다음은 변경 범위 자동 검사 추가 후 신규 HEAD에서 CI 재실행 → QA_SEC read-only → MASTER 종료 여부 판단.


## P00~P07 범용 확장 파일럿
- `13-harness/`는 B1-1 전용 독립 실험으로 새로 작성했으며 APOS 공통 엔진에 자동 편입되지 않는다.
- `14-dashboard/`는 로컬 정적 스냅샷 UI이며 실제 관제센터의 실시간 동작 증거가 아니다.
- 실제 AI 작업·MCP 쓰기·대외 배포·학습 향상 주장 없이 계약·권한·표시 안전을 시험한다.
- 다음: PR #16 동일 HEAD의 CI와 이력 확인 → 다른 QA_SEC 창에서 read-only 검증 → MASTER 병합 판단.

## 연계 PRs / P00~P07
- B1-1 Harness PR: https://github.com/MetaStudy999/codyssey-basic-web-portfolio/pull/16
- APOS Core Pilot Adoption PR: https://github.com/MetaStudy999/agentic-project-os/pull/118
- CODYSSEY B1-1 Central Sync PR: https://github.com/MetaStudy999/codyssey-basic/pull/97
- 모두 Draft / independent QA 전: 병합 금지.
- 직전 Harness 정적 CI Run 37790497335 PASS, 위 추가 후보 변경 이후 재검증 필수.
