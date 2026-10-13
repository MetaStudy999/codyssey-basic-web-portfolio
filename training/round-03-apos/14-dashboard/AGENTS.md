# 14-dashboard/AGENTS.md — 읽기 전용 미션 관제
## 적용 범위
현재 B1-1 파일럿 기록 스냅샷을 브라우저에서 시각화한다. 원격 API나 실시간 계정 상태를 자동 동기화하지 않는다.
## 실행 전 점검
13-harness/observations.json의 recorded_at, mission_id, status를 확인한다.
## 산출물
index.html — 스냅샷 P00~P07, AI·학습·연구 검증 상태를 안전하게 textContent로 표시.
## Exit Gate
파일을 HTTP 서버에서 열어 정상·누락 JSON 동작/가독성/접근성을 실제 브라우저에서 확인해야 Dashboard UI PASS. 소스 정적 검사만으로 UI PASS를 선언하지 않는다.
## 금지
민감정보 표시, 스냅샷을 실시간이라고 표기, 승인/쓰기 버튼을 실제 동작 없이 배치, 위험 제어 우회 금지.
