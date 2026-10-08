# B1-1 새 요구사항 해석과 추적표

공식 주제: **나를 소개하는 웹페이지 처음부터 만들기**. 제2기 CODYSSEY 교육과정은 `Round 02`, APOS 작업 반복은 `round-03-apos`로 구분한다.

## 공식 출처
- Mission: `B1-1. 나를 소개하는 웹페이지 처음부터 만들기.pdf` (공식 Mission 폴더)
- Evaluation: `responsive_web_javascript.md` (공식 평가 폴더)
- 이 문서는 기존 Round의 문서를 복사한 것이 아니라 위 공식 항목 및 현재 `04-src/`를 대조해 새로 정리한 **추적표**다. 원문의 모든 문장을 다시 싣지 않는다.

| ID | 요구/평가 대상 | 현재 Round 03 구현 | 현재 근거 |
| --- | --- | --- | --- |
| R01 | HTML·CSS·JS 분리 및 시맨틱 구조 | `04-src/index.html`, `css/style.css`, `js/main.js` | Static + Runtime PASS |
| R02 | Hero/About/Skills/Projects/Contact/Footer | `04-src/index.html` | Runtime PASS |
| R03 | 모바일 퍼스트, 768/1024px | `04-src/css/style.css` | Desktop/Tablet/Mobile Runtime PASS |
| R04 | Flexbox 메뉴, Grid 프로젝트 카드 | `04-src/css/style.css` | 구현 확인, 선택 이유는 별도 학습 |
| R05 | DOM·Event Listener·State→Render | `04-src/js/main.js` | Browser interaction PASS |
| R06 | 메뉴/스크롤/맨 위 이동 | `04-src/js/main.js` | Runtime PASS |
| R07 | 다크 모드 설정 유지 | `STATE.theme` + `localStorage` | Runtime PASS |
| R08 | IntersectionObserver 표시 | `04-src/js/main.js` | Runtime/Visual PASS |
| R09 | 문의 폼 입력 검증 | `validateForm` + `renderFormFeedback` | Negative/Positive PASS |
| R10 | GitHub 공개 API 비동기 연동 | `loadProjects` | Live/403/Empty PASS |
| R11 | 온라인 배포 URL | GitHub Pages `training/round-03-apos/04-src/` | Public Runtime PASS |
| R12 | Desktop/Mobile/Dark 스크린샷 | Round 03 Actions Artifact #11465355693 | 독립 화면 QA PASS |
| R13 | 학습자의 자체 설명 | `LEARNING-GATE.md` | 최소 설명 PASS |
| R14 | 공식 선택 BONUS 4종 | `07-evaluation/BONUS.md` | **NOT_VERIFIED** in Round 03 |

### 한계 및 추가 입증 필요
코어에 대해 이전의 PASS를 보존하지만, 현재 실험에서 새로운 측정(성능 시간/사용자 독립 재현/프레젠테이션 완성)은 별도로 수집해야 한다. 공식 발표자료 제출 필수 여부는 공식 원문을 기준으로 판단한다.
