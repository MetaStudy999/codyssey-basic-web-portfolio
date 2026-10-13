# Round 03 검증 수행 절차 (Verification Execution Procedure)

**범위:** B1-1 Round 03 독립 실험. 다른 분야에서는 해당 분야 검증기로 조정한다.
**역할:** MAKER=수행·수정, QA_SEC=변경 없는 독립 검증, MASTER=QA PASS 이후 최종 정리.
**판정:** 정적 검사, 실제 실행, 증빙 검토, 독립 QA, 사람의 학습·재현은 서로 다른 Gate이다.

## CHECK_00 — 읽기·후보 식별 (READ / IDENTITY)
입력: Repository, base/head SHA, 공식 미션 자료, Git 상태.
실행: git fetch origin; git status --short; git rev-parse HEAD; git rev-parse origin/main; git diff --name-only origin/main...HEAD.
출력: SHA, 변경 파일 목록, 보호된 소스·과거 Round 변경 여부.
판정: 예상 후보/범위 일치 PASS, 미확인/dirty/예상 외 변경은 STOP.

## CHECK_01 — 공식 요구·평가 계약 (REQUIREMENT)
입력: 공식 B1-1 PDF 및 평가 체크리스트, 01-mission/REQUIREMENTS.md.
실행: 공식 요구 ID → 구현 위치 → 테스트 → 증빙 → 사용자 설명 질문 연결 및 누락 확인.
출력: Requirement Traceability와 누락 내역.
판정: 요구 불일치·증거 부족은 FAIL/INSUFFICIENT_EVIDENCE. 문서 존재만으로 PASS 금지.

## CHECK_02 — 환경·보안·복구 준비 (PREFLIGHT)
입력: 실제 실행 기기, Node/브라우저 상태, 권한/정책, 변경 위험.
실행: 호스트별 실행능력·보안·비밀정보·복구점 확인. 타 기기의 검사 결과를 재사용하지 않는다.
출력: Runtime identity, 허용/차단 사유, 복구 계획.
판정: 고위험/권한 불명확 → STOP. 환경 미관측 → NOT_CHECKED.

## CHECK_03 — 실행 가능한 정적 계약 (STATIC CONTRACT)
**저장소 루트에서 순서대로 실행:**

    node --version
    node --test training/round-03-apos/05-tests/test-verification.mjs
    node training/round-03-apos/05-tests/verify.mjs

입력: 05-tests/VERIFICATION-CONTRACT.json 및 Round 03 파일, 검증된 소스 Git blob, 기존 증거 메타데이터.
검사: 폴더별 AGENTS.md, 필수 문서, 04-src 해시, CORE 및 학습 상태, Run/Artifact 관계, 미측정 구분, 오래된 상태 표시.
출력: JSON의 checks/passed/failed와 scope.
판정: 모든 테스트/정적검사 PASS일 때만 STATIC_CONTRACT_PASS. 실제 브라우저·독립 QA PASS 아님.

## CHECK_04 — 실제 기능·오류 경로 (BROWSER / NEGATIVE)
입력: 잠근 정확한 04-src 후보, 허용된 Playwright/Chromium 실행기.
실행: Desktop/Tablet/Mobile 375px, 다크모드 유지, 메뉴/스크롤/URL, 폼 검증, GitHub API 실호출·403·빈상태·재시도, 페이지 오류 확인.
출력: 브라우저 버전, Run/Job, Tested_SHA, ASSERTION 및 오류 로그.
판정: 새 실행이 없으면 NOT_RUN. 정책상 실행 불가면 INSUFFICIENT_EVIDENCE, 재현된 코드 결함은 FAIL. 과거 Round 03 Run 37582457341는 기존 검증 이력으로만 기록.

## CHECK_05 — 독립 화면 검토 (VISUAL)
입력: 같은 후보의 Desktop Light/Dark, Tablet, Mobile 실제 캡처/Trace.
실행: 한글 폰트, 스크롤 Reveal, 잘림, 가독성, 컨트롤 화면을 독립 검토.
출력: 검토자, 후보 SHA, 뷰별 판정과 문제·수정·재검증 기록.
판정: 0 Blocking Finding만 PASS. 자동 REVIEW를 근거 없이 PASS로 변경 금지.

## CHECK_06 — 공개 배포·서비스 확인 (PUBLIC)
입력: 배포 URL, 배포 Git SHA.
실행: index/CSS/JS HTTP 및 무결성 확인. 공개 주소의 다크모드/메뉴/폼/API 사용자 행동은 **별도의 실제 브라우저 검증**으로 수행.
출력: Public URL, Run/Job, main SHA, Asset/Interaction 검증 범위.
판정: HTTP/문구 검사만 통과하면 PUBLIC_ASSET_PASS. 실제 사용자 동작을 실행하지 않으면 PUBLIC_BROWSER_INTERACTION=NOT_RUN.

## CHECK_07 — 증빙·무결성·보존 (EVIDENCE)
입력: evidence/, Artifact ID/Run/Job, digest, expiry.
실행: expected/tested SHA 일치, 실제 증거 출처, 아티팩트 만료 확인. 원본 파일을 실제 검증하지 않았으면 digest 확인을 주장하지 않는다.
출력: 출처, SHA-256, 보존 기한/위험, 별도 확인 항목.
판정: 메타데이터 출처 PASS와 Binary Integrity PASS를 구분. 만료 위험은 RETENTION_RISK. Round 01/02 복사 금지.

## CHECK_08 — 독립 QA / 실패 복구 (QA_SEC)
입력: 정확한 PR HEAD, CHECK_00~CHECK_07의 증거.
실행: QA_SEC가 읽기 전용으로 범위·데이터·안전·검증을 교차검토. FAIL이면 Finding 작성→MAKER 최소 수정→새 HEAD 재검증.
출력: 동일 후보에 묶인 QA PASS/FAIL/INSUFFICIENT_EVIDENCE.
판정: HEAD 변경 시 이전 QA/CI PASS 재사용 금지. MAKER 스스로 독립 QA 선언 금지.

## CHECK_09 — 인간 학습·AI 성능 측정 (LEARN / MEASURE)
입력: 구술 학습, 독립 재현 과제, APOS 학습 단계, 실제 계측 기록.
실행: 설명·재현·전이를 분리하고 9개 단계 DISCOVER~TRANSFER 기준으로 판정. AI 시간/비용/재시도/성공률은 실제 계측값만 계산.
출력: Mission Completion, Human Mastery, AI Performance를 독립 판정.
판정: 최소 구술 PASS만으로 MASTER/TRANSFER 승격 금지. 미측정=NOT_MEASURED.

## CHECK_10 — 종료·병합·회귀·인수인계 (CLOSE)
입력: 현재 정책, 정확한 PR HEAD, QA_SEC 판정, CI 결과.
실행: 권한 있는 MASTER/Owner가 QA/CI 이후 병합 판단. Post-merge main SHA 검증, canonical state 동기화, Handoff 작성.
출력: Merge SHA, post-merge CI, 미완료 항목, 다음 작업 범위.
판정: exact HEAD QA PASS + 관련 CI PASS + 정책 준수 전 merge 금지.

## FAIL-CLOSED (실패 시 중단) 규칙
- FAIL: 새 기능·병합 중단 → Finding/재현 절차 → MAKER 수정 → 새 HEAD 테스트 → 독립 QA.
- 브라우저를 실행하지 않았으면 NOT_RUN. 접근할 수 없으면 INSUFFICIENT_EVIDENCE. 실제 결함이면 FAIL.
- STATIC_CONTRACT_PASS, RUNTIME_PASS, VISUAL_PASS, PUBLIC_BROWSER_PASS, HUMAN_MASTERY, FINAL_DECK은 별도 판정.
- 이 문서 자체는 검증 성공의 증거가 아니다.

## 참고 명령
- 로컬: node --test training/round-03-apos/05-tests/test-verification.mjs
- 로컬: node training/round-03-apos/05-tests/verify.mjs
- PR: .github/workflows/round03-contracts.yml 의 실제 HEAD 실행 결과 확인


## P00~P07 파일럿 실행형 Harness (추가)
위 CHECK_00~CHECK_10 계약을 생략하지 않고, CHECK_03에서 다음 명령도 실행한다.

    node --test training/round-03-apos/13-harness/harness.test.mjs
    node training/round-03-apos/13-harness/harness.mjs

- P00~P07 단계, 미측정/부정 판정, 도구 권한 거부, 출처 누락, 학습/연구 과장 표시를 검사한다.
- Harness의 `PILOT_INCOMPLETE`는 정상적인 사실 기반 결과일 수 있다. 이를 성공적인 범용 엔진 검증으로 바꾸지 않는다.
- P03: MCP 실제 연결/권한 거부 통합 시험 전에는 NOT_RUN.
- P04: 대시보드 브라우저 실제 화면·접근성 테스트 전에는 NOT_RUN.
- P05: 학습 사전/사후/지연/독립 재현·전이 실험 전에는 NOT_MEASURED.
- P06: 연구 질문/원본 출처/분석 재현 실험 전에는 NOT_RUN.
- P07: 다른 분야 반복 수행/블라인드 평가 전에는 NOT_MEASURED.
