# B1-1 Round 03 실행형 검증기 — 실제 CI 결과

이 파일은 새 Harness에 대한 **실제 실행 이력**이며 기존 B1-1 Chromium 테스트를 재수행했다는 의미가 아니다.

## 최초 실행 / 원인 / 수정
- Run: 37780357572
- Checked SHA: 1c63684895e16ff7ffd8da0476872fe08723170c
- 결과: FAIL (정상 상태 테스트의 RULE_AGENTS.md만 실패, 고의 실패 5개는 PASS)
- 원인: 루트 AGENTS.md에 하위 영역과 동일한 Exit Gate heading 요구를 충족하지 않았음
- 조치: 루트 Exit Gate 명시 + CI 정확한 PR HEAD checkout 확인 추가

## 수정 후 실행
- Run: 37780601556
- Candidate: 2b2755f265938110a45d123778709073e9a361c5
- EXPECTED_SHA = TESTED_SHA: PASS
- Node regression tests: 6 PASS / 0 FAIL
- Static contract/provenance checks: 43 PASS / 0 FAIL
- Artifact: 11552515261 (새로 생성한 정적 계약 보고서)
- Status: PASS — **이 exact candidate에서의 정적 계약 결과에 한정**

## 검증 완료와 미검증 분리
- PASS: 정적 계약·Git blob 불변성·메타데이터·고의 오류 검출.
- NOT_RUN in this task: 신규 Chromium 브라우저 상호작용, 독립 Visual QA, 공개 URL 전체 동작 재검증.
- PENDING: 새로운 Scope Gate 결과, QA_SEC 독립 검증, PR merge, 실제 AI 성능·학습 전이 측정.
- CORE B1-1의 과거 FINAL CLEAR는 보존하며 새 Harness 검증 성과와 합산하지 않는다.

상태/경로/문서 명세가 바뀌면 동일 실행 결과를 새 후보에 재사용하지 않고 새 CI를 실행한다.
