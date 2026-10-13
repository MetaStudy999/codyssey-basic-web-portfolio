# 11-improvement/AGENTS.md — 실험·개선

## 적용 범위
이 규칙은 현재 폴더와 그 하위 영역에만 적용하며 상위 training/round-03-apos/AGENTS.md 및 APOS 전역 보안 정책을 완화할 수 없다.

## 실행 전 점검
관찰→가설→최소 실험→검증→대조→채택 여부를 별도 Task와 Checker로 처리한다.

## 반드시 남길 산출물
EXPERIMENT-LOOP.md, 실험 전후 증거

## Exit Gate (종료 판정)
개선 전후의 동등한 품질·조건을 비교한 경우만 효과 주장 실제 근거가 부족하면 INSUFFICIENT_EVIDENCE 또는 PENDING을 명시한다.

## 절대 금지
한 사례에서 범용 기능으로 무단 승격·자가수정 금지

## 연결 절차
검증은 05-tests/VERIFY-PROCEDURE.md의 CHECK_00~CHECK_10을 따른다. 중요한 최종 판정에는 별도 QA_SEC가 필요하며 MAKER는 스스로 독립 QA를 완료했다고 선언하지 않는다.
