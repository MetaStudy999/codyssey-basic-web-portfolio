# APOS 공통 기능 승격 게이트

B1-1의 새 하네스 파일럿은 **전역 APOS 엔진**이 아니라 미션별 실험이다.

승격 전 필수:
- 정확한 후보·PR·정적 CI·별도 QA_SEC의 PASS
- 위험·권한 차단 및 잘못된 완료 판정의 Negative Test
- 독립 도메인 2개 이상의 추가 수행 (총 3개 분야 권장)
- 사용자 학습/연구 효과를 측정한 실제 기록
- 기존 APOS State/Training OS/Control Center 중복 생성 금지
- 승인된 개선 Task, 영향 범위, Rollback, 전후 비교

어느 하나라도 미달이면 CANDIDATE 또는 INSUFFICIENT_EVIDENCE로 유지한다. 자동 자기수정 및 자동 병합 금지.
