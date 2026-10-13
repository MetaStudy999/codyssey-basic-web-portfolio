# 10-performance/AGENTS.md — 성능 측정

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
AI 실행과 사용자 학습을 분리하고 분자·분모·계측 시작/종료·비교 조건을 기록한다.

## 반드시 남길 산출물
MEASUREMENT.md, 계측 기록

## Exit Gate (종료 판정)
미측정은 NOT_MEASURED, 데이터 출처와 계산식이 추적되면 PASS 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
추정치/동의 답변으로 성능 향상을 단정 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.
