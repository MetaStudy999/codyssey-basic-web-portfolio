# B1-1 Round 03 · 보너스 실제 코드 반영 (MAKER 초안)
기준 2026-10-09. **공식 기한 2026-10-31**. 원본 CORE 완료 이력과 새 보너스 후보를 분리한다.

| 공식 Bonus | 실제 새 코드 | 아직 필요한 증거 | 상태 |
|---|---|---|---|
| BONUS-01 언어별 필터 | 언어 버튼/실제 카드 필터·건수 동기화 | 브라우저 기능/오류/빈 데이터 검증 | IMPLEMENTED_NOT_QA |
| BONUS-02 타이핑 | 순차 문자·Reduced Motion 고려 | 브라우저 일반/모션 감소 시연 | IMPLEMENTED_NOT_QA |
| BONUS-03 실제 전송 | Formspree HTTPS POST 성공/실패/중복 방어 | 승인된 실제 Formspree ID 설정, 실제 요청 및 수신 | BLOCKED_EXTERNAL_CONFIG |
| BONUS-04 OS 테마 | System/Light/Dark, matchMedia 변경·저장 | 시스템 변경+재방문 브라우저 검증 | IMPLEMENTED_NOT_QA |
| CORE 표시 수정 | [hidden] 우선 적용·보이는 카드 수 구분 | 이전 기능 회귀 검증 | IMPLEMENTED_NOT_QA |

## 안전 경계
- Formspree ID는 `04-src/index.html`의 `data-formspree-endpoint`에 **승인된 공개 폼 주소**를 넣는 방식이며 기본값은 빈 문자열이다. 현재는 실제 전송하지 않는다.
- Formspree 테스트는 본인 승인된 계정과 비식별 테스트 입력을 사용하고, 실제 메일 수신 증거를 확보해야 BONUS-03 PASS 후보이다. 개인정보·토큰을 Git이나 채팅에 저장하지 않는다.
- 아직 main 변경 및 실제 공개 배포되지 않은 Draft다. 이전 QA PASS를 새 코드/보너스 PASS로 재사용할 수 없다.
- [공식 B1-1 평가 15문항](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/blob/docs/b1-1-owner-learning-review-20261009/training/round-03-apos/07-evaluation/OFFICIAL-EVALUATION-CHECKLIST.md)과 [Issue #17](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/issues/17)을 기준으로 학습·발표를 연결한다.
