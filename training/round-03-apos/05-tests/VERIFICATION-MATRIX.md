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
