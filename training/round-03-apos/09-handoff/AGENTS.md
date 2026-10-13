# 09-handoff/AGENTS.md — 안전 재개

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
작업 종료마다 정확한 브랜치 HEAD, Gate, 실패·잔여 범위, 수행/금지 항목을 작성한다.

## 반드시 남길 산출물
STATE.md와 최신 상태 읽기 기록

## Exit Gate (종료 판정)
새 창에서 원격 사실 재확인 뒤 단계 재개 가능해야 PASS 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
오래된 상태만으로 자동 승인·재실행·병합 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.
