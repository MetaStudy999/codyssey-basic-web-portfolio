# 00-control/AGENTS.md — 목표·권한

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
작업 시작 전 미션 목적, 사용자 의도, 기존 APOS 권한, 원본 후보 SHA를 확인한다.

## 반드시 남길 산출물
헌장, 변경 범위, 승인 경계, 현황 요약

## Exit Gate (종료 판정)
역할·저장소·변경 범위가 일치해야 PASS 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
임의로 승인·병합 권한을 부여하거나 CORE CLEAR를 범용 성능 PASS로 확대 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.
