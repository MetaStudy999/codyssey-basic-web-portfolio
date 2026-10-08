# 03-design/AGENTS.md — 설계·데이터 흐름

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
04-src의 실제 이름과 함수만 읽어서 그림과 코드 흐름을 구성하고 설계 대안·이유·한계를 남긴다.

## 반드시 남길 산출물
ARCHITECTURE.md와 실제 코드 연결

## Exit Gate (종료 판정)
모든 CODE 주장이 현재 Round 03 소스에서 확인되어야 PASS 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
가상 API/함수·Round 02 코드를 현재 구현이라 표기 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.

## Owner 직접 확인·성장 학습 (2026-10-09 추가)
- **현재 읽을 실제 산출물:** [ARCHITECTURE.md](ARCHITECTURE.md) — 실제 setTheme/loadProjects/validateForm 흐름 설명 존재.
- **2분 이해:** 먼저 위 실제 파일의 목적과 현재 상태를 읽습니다. 이 파일이 있다는 것만으로 새 결과 PASS는 아닙니다.
- **3분 능동 회상(Active Recall):** 자료를 덮고 답합니다. **버튼을 누르면 어떤 순서로 화면이 바뀔까요?**
- **4분 직접 확인·재현:** ARCHITECTURE.md를 보지 않고 Event → STATE → render 함수를 그린 뒤 소스의 실제 함수 이름과 대조합니다.
- **1분 가르치듯 설명(Teach-back):** 무엇을 보았는지, 왜 그렇게 설계했는지, 아직 확인하지 못한 것 1가지를 자신의 말로 말합니다.
- **지연 복습(Spaced Retrieval):** 성공하면 1→3→7일 후, 어려우면 다음 날 다시 확인합니다. 스스로 답한 기록은 [Owner 학습 허브](../OWNER-REVIEW-LEARN.md)에서 학습용으로만 관리하며 공식 QA·MASTER로 자동 변환하지 않습니다.
- **급한 일정:** 2026-10-31 Owner 통보 공식 기한까지 미션 실제 구현·평가를 우선하고, 자료 만들기 자체를 새 목표로 만들지 않습니다.
