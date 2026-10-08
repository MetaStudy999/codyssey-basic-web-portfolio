# Round 03 단계별 인수인계 — 독립 설정 Pilot

현재 작업 단위: **독립적인 Round 03 Mission Workspace 구조 설정과 누락 조사**.

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
