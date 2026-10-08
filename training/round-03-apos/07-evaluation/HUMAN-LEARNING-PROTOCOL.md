# 학습 효과 검증 — B1-1 / 타 도메인 공통 프로토콜

## 목표
AI가 정답을 제공하는 것과 사용자가 독립적으로 해결할 수 있게 되는 것은 별도 성과다.

## 실제 실험 순서
1. 사전 평가: 처음 본 문제의 정답률·시간·힌트 수 기록
2. 학습: 쉬운 설명→그림→실제 Round 03 코드→작은 연습
3. 즉시 평가: 유사하나 정답 문구가 다른 문제
4. 독립 재현: AI가 구현을 작성하지 않고 사용자가 직접 구현
5. 지연 평가: 일주일 등 고정된 기간 후 도움 없이 풀기
6. 지식 전이: 새로운 상황 또는 타 도메인의 별도 문제
7. QA: 평가자가 수행물과 독립성 기록을 점검

## 비교조건
비교 과제의 난이도·시험시간·모델 지원 수준을 통제한다. 가능한 경우 문제 순서를 교차한다. 학습시간 증가에 따른 효과와 방법 변경의 효과를 구분한다.

## 기록 기준
task_id, started_at, ended_at, hint_count, answer_correct, artifact_ref, independent, delayed_days, transfer_domain, checker_verdict.
실험 전 최소 구술 PASS는 이미 LEARNING-GATE.md에 존재한다. 이것이 독립 재현이나 MASTER/TRANSFER 합격을 뜻하지 않는다.
정식 단계: DISCOVER→UNDERSTAND→PRACTICE→REPRODUCE→APPLY→EXPLAIN→EVALUATE→MASTER→TRANSFER.
