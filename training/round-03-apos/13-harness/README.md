# 범용 Mission Harness — B1-1 독립 파일럿 v1

## 목적
APOS 전역 기능으로 승격하기 전에, B1-1에서 최소 하네스의 명세·권한·지표·증거 정합성을 **실행 가능한 읽기 전용 검사**로 시험한다.

- 계약: contract.json (P00~P07 + CHECK_00~CHECK_10 + 안전 게이트)
- 관측: observations.json (실측/미측정 구분, 고정 날짜 스냅샷)
- 도구 카탈로그: tool-registry.json (기능/위험/연결 상태/승인)
- 실행: harness.mjs (실행하지 않은 분야는 PENDING·NOT_RUN·NOT_MEASURED)
- 회귀: harness.test.mjs (고의 허위 PASS, 범위 누락, 권한 없는 쓰기 차단)
- 시각화: ../14-dashboard/index.html (스냅샷 읽기 UI, 실시간 관제 아님)

## 실행
```bash
node --test training/round-03-apos/13-harness/harness.test.mjs
node training/round-03-apos/13-harness/harness.mjs
```

## 중요한 제한
이 v1은 **제안·정적 검증·증거 맵 확인**만 수행한다. 외부 MCP 연결 또는 배포·금융·연구 작업을 자율적으로 실행하지 않는다. 범용 엔진 검증 완료는 다른 분야에서 재검증 전까지 인정하지 않는다.

## 전문 도구 등록 보완 (2026-10-08)
tool-registry.json의 각 등록에는 version, timeout_ms, cost_estimate_usd(null 허용), retry_policy, idempotency_key_required, audit_required, fallback, permission_scope, allowed_operations을 추가했다.
실제 MCP 연결이 확인되지 않은 채 호출하지 않는다. GitHub Actions는 등록계약 자체의 유효성만 검증한다.
