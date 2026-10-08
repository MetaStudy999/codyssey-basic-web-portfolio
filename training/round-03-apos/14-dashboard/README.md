# Round 03 웹 대시보드 — 로컬 파일럿 (실시간 연동 전)

현재 스냅샷 미리보기: index.html. 대상 데이터: ../13-harness/observations.json.
GitHub Pages에 병합·배포되면 /training/round-03-apos/14-dashboard/ 경로에서 열 수 있다.

**현재 웹 대시보드가 원격 GitHub/API에 실시간 연결되었다는 뜻이 아니다.**
실제 실시간 관제는 APOS Core Control Center의 인증/권한/관측 계층과 연결하는 별도 QA 대상이다.
실행 가능한 하네스 상태 확인은 node training/round-03-apos/13-harness/harness.mjs 명령으로 한다.


## Owner 학습 도구(2026-10-09 · PR #18)
- [owner-learning.html](owner-learning.html): 15개 프로세스 폴더의 실제 산출물·자가 질문·10분 재현·학습 후 복습일을 보여줍니다.
- **사용:** HTML 파일 다운로드 → 로컬 브라우저에서 열기 → 폴더 선택 → 실제 소스 링크 열기 → 문서 덮고 답 → 실습 → 자가평가. 페이지 내 학습 기록은 브라우저 localStorage에만 보존되며 외부로 전송하지 않습니다.
- 이것은 **오프라인 학습 지원 UI**이며 위 기존 index.html의 고정 스냅샷 관제와 다른 목적입니다. 원격 GitHub CI/PASS를 읽거나 사용자 실기·공식 평가를 자동 인증하지 않습니다.
- 전체 상태 요약과 미완료 우선순위는 [Owner 학습 허브](../OWNER-REVIEW-LEARN.md)를 참조합니다.
