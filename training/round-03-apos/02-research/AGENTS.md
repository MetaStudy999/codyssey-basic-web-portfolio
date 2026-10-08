# 02-research/AGENTS.md — 학습 설계

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
이해도·선행개념을 점검하고 쉬운 비유→정의→실제 코드→작은 연습→자기 설명→독립 재현 순으로 진행한다.

## 반드시 남길 산출물
LEARNING-MAP.md, 이해/재현 결과

## Exit Gate (종료 판정)
APOS의 9단계 학습 스키마와 의미가 일치해야 PASS 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
정답 동의만으로 REPRODUCE/MASTER/TRANSFER 승격 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.

## Owner 직접 확인·성장 학습 (2026-10-09 추가)
- **현재 읽을 실제 산출물:** [LEARNING-MAP.md](LEARNING-MAP.md) — HTML/CSS/JS와 상태 흐름 학습 지도 존재. 독립 재현 미측정.
- **2분 이해:** 먼저 위 실제 파일의 목적과 현재 상태를 읽습니다. 이 파일이 있다는 것만으로 새 결과 PASS는 아닙니다.
- **3분 능동 회상(Active Recall):** 자료를 덮고 답합니다. **HTML·CSS·JS를 각각 생활 속 비유로 설명해 보세요.**
- **4분 직접 확인·재현:** LEARNING-MAP.md를 닫고 DOM·Event·State·Render를 30초 안에 설명한 뒤 js/main.js에서 한 예를 찾습니다.
- **1분 가르치듯 설명(Teach-back):** 무엇을 보았는지, 왜 그렇게 설계했는지, 아직 확인하지 못한 것 1가지를 자신의 말로 말합니다.
- **지연 복습(Spaced Retrieval):** 성공하면 1→3→7일 후, 어려우면 다음 날 다시 확인합니다. 스스로 답한 기록은 [Owner 학습 허브](../OWNER-REVIEW-LEARN.md)에서 학습용으로만 관리하며 공식 QA·MASTER로 자동 변환하지 않습니다.
- **급한 일정:** 2026-10-31 Owner 통보 공식 기한까지 미션 실제 구현·평가를 우선하고, 자료 만들기 자체를 새 목표로 만들지 않습니다.
