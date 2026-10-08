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
