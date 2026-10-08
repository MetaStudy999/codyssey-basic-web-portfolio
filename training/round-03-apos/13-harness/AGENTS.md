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

## Owner 직접 확인·성장 학습 (2026-10-09 추가)
- **현재 읽을 실제 산출물:** [README.md](README.md) — 읽기 전용 Harness 검사기·계약 존재. 범용성 NOT_ESTABLISHED.
- **2분 이해:** 먼저 위 실제 파일의 목적과 현재 상태를 읽습니다. 이 파일이 있다는 것만으로 새 결과 PASS는 아닙니다.
- **3분 능동 회상(Active Recall):** 자료를 덮고 답합니다. **검사기가 PASS여도 실제 도구 연결 PASS가 아닌 이유는?**
- **4분 직접 확인·재현:** 저장소 루트에서 node --test training/round-03-apos/13-harness/harness.test.mjs 를 실행하고 결과와 NOT_RUN 항목을 구별합니다.
- **1분 가르치듯 설명(Teach-back):** 무엇을 보았는지, 왜 그렇게 설계했는지, 아직 확인하지 못한 것 1가지를 자신의 말로 말합니다.
- **지연 복습(Spaced Retrieval):** 성공하면 1→3→7일 후, 어려우면 다음 날 다시 확인합니다. 스스로 답한 기록은 [Owner 학습 허브](../OWNER-REVIEW-LEARN.md)에서 학습용으로만 관리하며 공식 QA·MASTER로 자동 변환하지 않습니다.
- **급한 일정:** 2026-10-31 Owner 통보 공식 기한까지 미션 실제 구현·평가를 우선하고, 자료 만들기 자체를 새 목표로 만들지 않습니다.
