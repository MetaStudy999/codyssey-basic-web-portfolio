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

## 실제 이력과 남은 독립 Gate
- 정적 검증기: Run 37780601556에서 PASS (당시 후보 2b2755f...).
- 고의 오류 검증: 5개의 Negative Test가 예상대로 실패를 탐지함.
- PR #16 독립 QA_SEC는 아직 PENDING. QA 없이 병합 또는 범용 하네스 검증 완료를 선언하지 않는다.
- 현재 PR 추가 수정으로 HEAD가 바뀌면 새로운 CI 결과를 반드시 읽는다.


## 새 범용 APOS 하네스/관제/학습/연구 프로그램
- [~] P00~P07 단계·Exit Gate 계약 및 도구 Registry 작성; PR QA 대기
- [~] 로컬 읽기 전용 Harness Evaluator, 안전·과장 탐지 테스트; CI 실측 결과 확인 필요
- [~] 날짜 기록을 보여주는 웹 대시보드 시안; 브라우저 UI 검증/실시간 연결 전
- [ ] MCP Gateway 실제 연결·권한 차단·재시도 통합 실험
- [ ] 학습 효과 사전/사후/지연/재현 실험
- [ ] 원문 출처 기반 연구·재현 실험
- [ ] 다른 분야 ≥3종 비교 실험 및 APOS Core 승격 QA
