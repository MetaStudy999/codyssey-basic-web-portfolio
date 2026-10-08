# Round 03 누락·미완료 항목 기록부

| 항목 | 현재 상태 | 다음 검증 |
| --- | --- | --- |
| B1-1 실행 코드 `04-src/` | PRESENT / CORE CLEAR | SHA 유지 |
| 실제 Chromium·모바일·API Evidence | VERIFIED HISTORICAL ROUND 03 | 기존 아티팩트 출처 확인 |
| 새로 작성한 독립 요구·설계·학습 문서 | CANDIDATE | 독립 QA |
| 독립된 테스트 소스 및 CI 측정기 | PENDING | 새 범위에서 구현·실행 |
| 최신 배포를 포함한 Evidence README 정합성 | CANDIDATE | 이번 변경 검증 |
| 선택 Bonus 4종 독립 구현 | NOT_VERIFIED | CORE와 별도로 계획·검증 |
| 실제 Screenshot 삽입한 Round 03 발표본 | NOT_STARTED | 기획 → 제작 → 시각 QA |
| 학습자 Blind Reproduction(자료 없이 재현) | NOT_MEASURED | 사용자 실습 |
| AI 속도·비용·반복 재현성 계측 | NOT_MEASURED | 기준선 계측 |
| 다른 분야에 동일 Harness 적용 | NOT_STARTED | B1-2 또는 비코디세이 Mission |
| CODYSSEY 중앙 및 APOS 상태 동기화 | STALE | 별도 Task/PR |

각 항목의 상태는 독립적으로 갱신한다. **CORE CLEAR를 취소하지 않으며**, 모든 항목이 끝난 것처럼 보이게 하지도 않는다.


## 신규 검증 절차 보완 진행
- [~] CHECK_00~CHECK_10 실행 매뉴얼: 신규 문서 후보
- [~] 정적/증빙 출처 검사기 + 고의 실패 테스트: 신규 코드 후보, CI 실행 전
- [ ] Round 03 자체 Chromium 반복 실험과 실제 성능 비교
- [ ] 공개 URL 사용자 행동 자동 브라우저 테스트 (HTTP 자원 확인과 구분)
- [ ] 아티팩트 만료 전 장기 보존과 실제 Binary 무결성 재확인
- [ ] 사람이 도움 없이 재현/전이하는지 측정
