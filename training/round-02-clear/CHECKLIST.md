# B1-1 Round 02 Checklist

## Gate 1 — 기준 확정
- [x] 제2기 현재 Mission PDF에서 ID·제목 확인
- [x] 공식 요구사항·산출물 확인
- [x] 제2기 오리엔테이션에서 학습 분야·필수/선택·목표 확인
- [x] 현재 Repository와 과거 Mission ID 확인
- [x] 기존 Mission/Evaluation 확인
- [x] `training/round-01-clear/` 참고자료 확인

## Gate 2 — 평가항목 먼저
- [x] 공식 요구사항과 기존 Evaluation 비교
- [x] 공식 요구 / 기존 평가 / AI 예상 질문 구분
- [x] Requirement → Implementation → Verification → Evidence → Evaluation 연결 초안 작성

## Gate 3 — 최소 통과 경로
- [x] 필수 구현 목록 확정
- [x] 선택 고도화 분리
- [x] 실행 순서 확정

## Gate 4 — 적시 학습
- [ ] 현재 구현에 필요한 핵심 용어 이해
- [ ] 핵심 개념을 자기 말로 설명 가능

## Gate 5 — 실제 수행
- [x] 실행 위치·환경 확인
- [x] Preflight 완료
- [x] 한 단계씩 실행
- [x] 실제 출력 확인
- [x] 오류 발생 시 최소 수정 후 재검증

### Gate 5 현재 메모
- 학교 iMac 호스트에서 OrbStack Linux 환경 사용 확인
- Guest OS: Ubuntu 24.04.5 LTS (Noble Numbat)
- Kernel: Linux 6.17.8-orbstack-00308-g8f9c941121b1, x86_64
- Shell: `/bin/bash`
- User/Home: `metastudy9997479` / `/home/metastudy9997479`
- Package manager: `/usr/bin/apt`
- `sudo` 그룹 포함
- Git: 설치 완료 — `2.43.0` (`/usr/bin/git`)
- Git 작성자 전역 설정: `user.name` UNSET / `user.email` UNSET
- B1-1 로컬 Repository: clone 완료 — `/home/metastudy9997479/projects/codyssey-basic-web-portfolio`
- Repository clone/원격/브랜치/clean 상태 검증: PASS
- Git 작성자 설정 상태 확인: 완료 — 전역 둘 다 UNSET
- Repository 로컬 Git 작성자 설정: PASS (`user.name`/`user.email` 모두 SET, 실제 값 미기록)
- 작업 트리: clean
- `main` 동기화 및 `round-02/b1-1-web-portfolio` 작업 브랜치 생성: PASS
- 원격 Round 02 작업 브랜치 생성: 완료
- 원격 Round 02 브랜치 tracking/fast-forward/clean 검증: PASS
- Gate 2 연결표: `docs/requirements-mapping.md`
- Gate 3 최소 통과 경로: `docs/minimum-passing-path.md`
- Gate 3 문서 로컬 동기화: PASS
- Gate 4 학습자료: `docs/jit-learning.md`
- Gate 4 학습자료 로컬 동기화: PASS
- 기본 웹 구조 생성: PASS (`index.html`, `css/`, `js/`, `images/`)
- 시맨틱 HTML 구조 작성: PASS (`header/nav/main/section/article/footer`, 필수 섹션, CSS/JS 연결)
- CSS 기본 스타일/반응형 정적 검증: PASS (`:root`, dark theme, Flexbox, Grid, 768/1024px, no inline style)
- JavaScript Event/State/Render 정적 검증: PASS (`state`, listeners, localStorage, render functions, 60/300px, observer 0.2)
- Contact Form 1차 정적 검증: FAIL (폼 상태/검증/렌더/이벤트 코드 미반영)
- Contact Form 삽입 실패 원인 진단: 완료 (marker/resize/Python 정상, Contact 코드 미반영 확인)
- Contact Form 최소 수정 재적용/정적 재검증: PASS (`state.form`, validation, error render, input/submit listeners)
- GitHub API 상태 흐름 정적 검증: PASS (`fetch`, async/await, try/catch, loading/success/error/empty, retry, 403)
- Local HTTP Server Runtime: PASS (`/`, CSS, JS 모두 HTTP 200)
- Browser Initial Runtime: PASS (주요 섹션/CSS/GitHub API success 카드 표시 정상)
- Dark Mode + localStorage Runtime: PASS (토글/새로고침 유지/버튼 라벨/라이트 복귀)
- Mobile Hamburger Runtime: PASS (표시/열기/닫기/anchor 이동/자동 닫힘)
- Scroll State Runtime: PASS (60px Header / 300px Scroll Top / smooth top / hide)
- Contact Form Runtime: PASS (빈 값/이메일 형식/필드별 오류/정상 성공 메시지)
- GitHub API Success/Reload Runtime: PASS (카드/상태문구/loading/재로딩 success)
- GitHub API Error/Retry Runtime: PASS (Offline error / retry label / Online recovery / card re-render)
- GitHub API Empty Runtime: PASS (empty message / cards hidden / reload / success recovery)
- GitHub API 전체 상태 Runtime: PASS (loading / success / error / empty / retry)
- Responsive Runtime: PASS (375px / 768px / 1200px, no horizontal overflow)
- IntersectionObserver Runtime: PASS (섹션 reveal / 1회 실행 / 반복 깜빡임 없음)
- GitHub CLI(gh) 설치: PASS (`2.45.0`, `/usr/bin/gh`)
- GitHub CLI 인증: PASS (`MetaStudy999`, Repository 접근 확인)
- 구현 로그: `docs/implementation-log.md`
- 다음 단계: GitHub API 상태 흐름 구현
- 상세 재현 기록: `environment/README.md`

## Gate 6 — 검증·증빙
- [ ] 공식 요구사항별 실제 검증
- [ ] 실제 Evidence 수집
- [ ] Round 01 과거 결과를 현재 Evidence로 대체하지 않음
- [ ] Secret 노출 없음

## Gate 7 — 평가 준비
- [ ] 구현 파일/함수/설정과 평가항목 연결
- [ ] 시연 방법 준비
- [ ] 10초 답변 준비
- [ ] 30초 답변 준비
- [ ] 1분 답변 준비
- [ ] WHY 질문 대비

## Gate 8 — 최종 점검
- [ ] 모의평가 완료
- [ ] 코드·명령 설명 가능
- [ ] 오류 상황 설명 가능
- [ ] 대안과 한계 설명 가능
- [ ] 공식 요구 + Runtime + Verification + Evidence + Evaluation 설명 충족
- [ ] 조건 충족 후에만 **B1-1 CLEAR**

## Gate 9 — 발표자료
- [ ] `presentation/README.md` 기준 확인
- [ ] 실제 Evidence 기반 OUTLINE 작성
- [ ] Slide ↔ Requirement ↔ Implementation ↔ Evidence 연결
- [ ] 발표 SCRIPT 준비
- [ ] 실제 Runtime Screenshot 준비
- [ ] 필요한 Diagram / 개념 Image Asset 준비
- [ ] Figma Master Template에 배치
- [ ] PDF/PPT Export 검토
- [ ] Secret·개인정보 제거 확인
- [ ] 30초 핵심 설명 및 예상 질문 준비


- GitHub CLI(gh) 인증: PASS (`MetaStudy999`)
- Remote Push Runtime: PASS (local/remote HEAD `c204364`, ahead/behind 없음, clean)
- 구현 + Evidence 원격 브랜치 반영: PASS


- Root README Update/Push: PASS (`07f3b03`)
