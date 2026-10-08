# 두 축의 성능 평가 — AI 미션 수행 + 사람 지식 성장

**Baseline 성격:** 아래 표는 현재 확인 가능한 검증 결과와 *측정되지 않은 수치*를 분리한다. 신규 벤치마크를 실행한 결과가 아니다.

| 측정 축 | 지표 | B1-1 확인값 | 측정 규칙 |
| --- | --- | --- | --- |
| 기술 정확성 | 실제 Chromium CORE 상태 | PASS (Run 37582457341) | 실제 런타임 Assertion 출처만 인정 |
| 검증 투명성 | 독립 화면 검토 | PASS (W210) | Evidence REVIEW와 수동 판단 분리 |
| 배포 신뢰성 | 병합 후 공개 검사 | PASS (Run 37774449939) | 정확한 main SHA에 연결 |
| 구현 효율 | 시행 횟수·호출 수·총 실행 시간 | NOT_MEASURED | 동일 조건 반복 기록 필요 |
| 오류 복구 | 결함별 발견→수정→재검증 시간 | NOT_MEASURED | timestamp와 재현 조건 필수 |
| 재현성 | 동일 입력을 반복했을 때 PASS 비율 | NOT_MEASURED | 2회 이상 독립 수행 결과 |
| 지식 이해 | 자신의 말로 핵심 4개 설명 | PASS_MINIMUM | `LEARNING-GATE.md`, 숙달 대체 불가 |
| 개인 독립성 | 힌트 없이 기능 재현 | NOT_MEASURED | AI 지원 수준도 함께 기록 |
| 지식 전이 | 새로운 문제에 원리 적용 | NOT_MEASURED | 별도 과제와 검증자 필요 |

## 계측 데이터 계약 (다음 실행부터)
최소 기록 항목:
`mission_id`, `domain`, `scope`, `input_version`, `candidate_sha`, `runtime_profile`, `started_at`, `ended_at`, `attempts`, `rework_count`, `test_cases`, `tests_passed`, `evidence_refs`, `tool_calls`, `cost_if_known`, `human_help_level`, `blind_reproduction_result`, `transfer_result`, `limitations`.

미측정·입력 없음은 **NULL/NOT_MEASURED**, 추정치는 ESTIMATE로 보존한다. 숫자를 만들어 평균·점수·백분율을 표시하지 않는다.

## 성능 향상 실험
새 프로세스 A/B 비교 시 동일한 작업 범위·환경·시간 조건을 기록한다. 결과의 **품질**을 먼저 보장하고, 동등한 품질에서 **속도·비용·개입 감소**를 평가한다. 단 한 미션 성공을 범용 능력 향상으로 선언하지 않는다.


## 실제 측정값 산식 (분모 0이면 NOT_MEASURED)
| 지표 | 계산 기준 |
| --- | --- |
| 테스트 성공률 | 실제 실행한 테스트 중 PASS / 전체 실제 실행 테스트 |
| 재작업 비율 | Repair로 인해 반복 실행한 단계 / 전체 실행 단계 |
| 자동 처리 비율 | 사람이 개입하지 않고 정상 완료한 허용 Task / 수행한 해당 Task |
| 실행 시간 | 같은 범위의 완료 시각 - 시작 시각 |
| 독립 재현율 | 도움 없이 해결한 재현 과제 / 실제 시도한 과제 |
| 전이 능력 | 이전에 보지 못한 문제를 새로 해결한 실증 |

입력 데이터가 없으면 NOT_MEASURED, 추정치는 ESTIMATE로 분리한다. 미션 완료·학습 숙달·AI 수행 효율은 독립 지표다.
