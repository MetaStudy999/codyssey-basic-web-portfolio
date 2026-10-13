# 13-harness/AGENTS.md — 범용 미션 파일럿
## 적용 영역
B1-1 Round 03에 한정된 제안·검증용 하네스. 전역 APOS 정책과 루트 AGENTS.md를 우선한다.
## 실행 전 점검
contract.json, observations.json, tool-registry.json 및 ../05-tests/VERIFY-PROCEDURE.md를 실제 HEAD에서 확인한다.
## 실행
저장소 루트에서 node --test training/round-03-apos/13-harness/harness.test.mjs 와 node training/round-03-apos/13-harness/harness.mjs를 실행한다.
## Exit Gate
요구된 단계 ID, 출처, 지표의 미측정 값, 권한 차단이 독립 증거로 검증되면 후보 PASS. 다른 도메인 통과를 주장하지 않는다.
## 금지
실제 MCP를 호출하거나 외부 쓰기를 실행하지 않는다. 툴 연결 여부 추정, 자동 병합, 실제 연구 성과·학습 숙달도 조작 금지.
