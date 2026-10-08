# P00~P07 범용 하네스 단계별 인수 조건

| 단계 | 산출물 | 실제 검증 및 종료 조건 | 현재 |
|---|---|---|---|
| P00 기준 상태 | APOS + 중앙 Control + B1-1 identity | 모든 canonical state/actual SHA 일치 | PENDING |
| P01 프로세스 | CHECK_00~10, 폴더별 AGENTS, 위험 계약 | 후보 HEAD 독립 QA | PENDING |
| P02 실행형 검증 | source pin, static test, negative tests, artifacts | exact-head CI + 증빙 | 신규 계약 QA PENDING |
| P03 MCP 도구 | 버전·연결·권한·비용 registry | 실제 연결, 읽기/쓰기/거부 경로 테스트 | NOT_RUN |
| P04 웹 관제 | 읽기 UI, 추적가능 데이터 | 실제 브라우저 UI/오류·접근성 검증 | NOT_RUN |
| P05 학습 | 사전/사후/지연·독립 재현 평가 | 실제 학습 실험/동등 조건 비교 | NOT_MEASURED |
| P06 연구 | 문헌 출처·주장 매핑·재현 | 실제 연구과제 실행/독립 근거 검토 | NOT_RUN |
| P07 범용성 | 3개 이상 이질적 미션 비교 | 실험 기록·오판정·독립 QA | NOT_MEASURED |

단계를 건너뛰어 PASS를 만들지 않는다. 이전 B1-1 CORE CLEAR와 새로운 하네스 승인 결과를 구분한다.
