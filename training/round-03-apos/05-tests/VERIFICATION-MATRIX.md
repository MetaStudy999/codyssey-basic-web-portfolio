# 검증 계획과 실제 증거 — Round 03 단독

## 현재 확인된 과거 Round 03 증거 (재실행을 주장하지 않음)
| 분류 | 결과 | 정확한 출처 |
| --- | --- | --- |
| Chromium 실브라우저 동작 | PASS | APOS Run `37582457341`, Job `112664996295` |
| Desktop/Tablet/Mobile | PASS | 같은 Run, 독립 Visual Review `evidence/VISUAL-REVIEW.md` |
| Theme, 메뉴, 스크롤 | PASS | `evidence/runtime-summary.json` |
| 폼 오류 및 성공 UI | PASS | `evidence/runtime-summary.json` |
| GitHub API 실호출/403/빈 상태 | PASS | `evidence/runtime-summary.json` |
| 공개 URL 자원 접근 | PASS | `evidence/public-runtime-summary.json` |
| B1-1 FINAL CLEAR 병합 후 Public Runtime | PASS | GitHub Actions Run `37774449939` |
| 새 Harness 성능 비교·반복성 | NOT_MEASURED | `10-performance/MEASUREMENT.md` |

## 다음 벤치마크에서 측정할 것
1. 동일한 공식 요구를 입력했을 때 계획 누락 개수와 수정 횟수
2. 처음 만든 코드의 정적/실행/보안 검증 통과율
3. 재현 가능한 결함의 발견·복구 소요시간
4. 제출 결과 ↔ 실제 실행 SHA 동일성
5. 사용자가 힌트 없이 설명·재현·다른 문제에 적용한 비율
6. 실제 시간, 도구 호출 수, 비용(측정 가능한 경우에만)

## 검증 Gate
- Static: JS 구문, 링크/DOM 구조, 범위, 비밀정보 점검
- Functional: Desktop/Tablet/Mobile, theme/menu/scroll/form/API
- Negative: 필드 누락, 이메일 오류, HTTP 403, 빈 API
- Evidence: exact SHA, 실행 ID, 로그, 스크린샷, 아티팩트 digest
- QA: 작성자와 검증자 역할 분리

**주의:** 실제로 수행하지 않은 새로운 테스트는 이 문서가 존재한다는 이유로 PASS가 되지 않는다.


## 실행형 검증 진입점 (P0)
- 정식 실행 순서: VERIFY-PROCEDURE.md CHECK_00~CHECK_10
- 정적/출처 계약: VERIFICATION-CONTRACT.json
- 실제 정적 검사: verify.mjs
- 고의 실패 회귀 검사: test-verification.mjs
- PR 자동검증: 저장소 루트 .github/workflows/round03-contracts.yml
- 정적 계약 PASS는 Chromium 실브라우저 또는 독립 QA 재실행을 뜻하지 않는다.

## 실행 근거
- Run 37780357572: 초기 정상 상태 테스트 FAIL 1건 → 원인: 루트 AGENTS Gate 제목 미일치 → 수정.
- Run 37780601556: Node 테스트 6/6 PASS, 정적/출처 검사 43/43 PASS.
- Run 37780601556: EXPECTED_SHA와 TESTED_SHA 동일. 신규 브라우저 검증을 실시하지 않았다.
- 변경 범위 CI 검사도 추가했으며, 새 HEAD에서 실제 성공 결과가 나와야 이 범위까지 PASS.
