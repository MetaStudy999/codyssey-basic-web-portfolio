# B1-1 Round 02 — Evaluation Prep

> 목표: **코드를 암기하지 않고 전체 흐름을 자기 말로 설명하기**

## 0. 10초 전체 설명

> B1-1은 외부 프레임워크 없이 HTML, CSS, JavaScript로 반응형 포트폴리오를 만들고, 사용자 Event가 State를 바꾸고 Render를 통해 DOM에 반영되는 웹의 기본 동작을 직접 구현한 미션입니다. GitHub API 비동기 처리와 GitHub Pages 배포까지 검증했습니다.

## 1. 30초 전체 설명

> HTML은 의미 있는 문서 구조, CSS는 반응형 레이아웃과 Light/Dark 표현, JavaScript는 DOM·이벤트·상태·API 처리를 담당하도록 분리했습니다. 모바일 메뉴, Smooth Scroll, Scroll Top, Dark Mode, Contact Validation을 구현했고, GitHub API는 loading/success/error/empty/retry 상태를 나눠 렌더링했습니다. 375/768/1200px과 실제 GitHub Pages에서 기능을 검증하고 Desktop/Mobile/Dark Screenshot을 Evidence로 남겼습니다.

## 2. 1분 전체 설명 — WHAT → WHY → HOW → VERIFY → LIMITATION

### WHAT
순수 HTML/CSS/JavaScript 반응형 포트폴리오입니다.

### WHY
React 이전에 DOM, Event, State, Render, 비동기 처리의 기본 원리를 직접 이해하기 위해 구현했습니다.

### HOW
- HTML: Semantic 구조와 Hero/About/Skills/Projects/Contact/Footer
- CSS: Variables, Flexbox, Grid, Mobile First, Dark Theme
- JS: `addEventListener`, State, Render 함수, localStorage, IntersectionObserver
- API: `fetch + async/await + try/catch`
- 배포: GitHub Pages `main:/`

### VERIFY
- 모바일/태블릿/데스크톱
- Dark Mode persistence
- Contact invalid/valid
- API loading/success/error/empty/retry
- 실제 Pages Runtime
- Screenshot/verify Evidence

### LIMITATION
필수 기능 외에 언어별 프로젝트 필터, Hero 타이핑, 시스템 테마 감지, Formspree 전송 흐름을 보너스로 구현했습니다. Formspree Endpoint 연결은 완료했으며, 실제 수신 여부는 Runtime에서 최종 확인합니다.

---

# 평가 항목별 빠른 답변

## A. 반응형 레이아웃

**코드 위치:** `css/style.css`

- 기본 CSS를 모바일 기준으로 작성
- `@media (min-width: 768px)`
- `@media (min-width: 1024px)`

**10초 답변**

> 모바일 퍼스트로 작은 화면을 기본 설계하고 768px과 1024px 이상에서 필요한 레이아웃만 확장했습니다.

**시연**

DevTools 375px → 768px → 1200px.

---

## B. Dark Mode + 새로고침 유지

**코드 위치:** `js/script.js`

```text
Theme Click
→ toggleTheme()
→ setTheme()
→ state.theme
→ localStorage
→ renderTheme()
→ DOM
```

**10초 답변**

> Theme 상태를 바꾸고 localStorage에 저장한 뒤 renderTheme이 data-theme과 버튼 문구를 갱신합니다. 그래서 새로고침 후에도 유지됩니다.

---

## C. Hamburger / Smooth Scroll / Scroll Top / Reveal

**핵심 함수**

- `toggleMenu()`
- `handleNavLinkClick()`
- `renderScrollUi()`
- `handleScrollTop()`
- `IntersectionObserver`

**기준값**

- Header: 60px
- Scroll Top: 300px
- Observer threshold: 0.2

**WHY**

> 모바일 메뉴는 작은 화면의 공간을 절약하고, Smooth Scroll과 Scroll Top은 긴 단일 페이지 탐색을 쉽게 하며, Observer는 화면에 들어온 요소만 효율적으로 처리하기 위해 사용했습니다.

---

## D. GitHub API

**코드 위치:** `loadProjects()`, `setProjectsState()`, `renderProjects()`

```text
Reload/Initialize Event
→ state.projects = loading
→ fetch()
→ response 확인
→ JSON
→ filter(non-fork)
→ success 또는 empty
→ renderProjects()
```

실패:

```text
fetch/error/403
→ catch
→ state.projects = error
→ "다시 시도"
```

**async/await를 쓴 이유**

> Promise 체인을 순차적인 코드처럼 읽을 수 있어 요청→응답→JSON→상태 갱신 흐름을 이해하기 쉽습니다.

**try/catch를 쓴 이유**

> 네트워크 실패나 403 같은 예외를 한 곳에서 error 상태로 바꾸기 위해 사용했습니다.

### map / filter / forEach

- `filter`: fork 저장소 제외 + 선택 언어와 일치하는 프로젝트 필터링
- `map`: Repository 데이터를 Project Card DOM으로 변환
- `forEach`: 생성한 카드들을 Grid에 추가

### Projects는 왜 페이지를 나눴나?

> 공개 Repository가 많아지면 한 화면이 너무 길어지므로 Pagination을 추가했습니다. 화면 폭에 따라 Mobile 4개, Tablet 6개, Desktop 9개를 표시해 1열×4행, 2열×3행, 3열×3행 형태를 유지합니다. 페이지 버튼으로 모든 Repository를 순서대로 볼 수 있습니다.

### 30개라면 어떻게 보이나?

> Desktop에서는 9개씩 4페이지로 나뉩니다. 1페이지는 1–9번째, 2페이지는 10–18번째처럼 표시하고 마지막 페이지에는 남은 3개가 표시됩니다.

### Pagination 위치를 왜 고정했나?

> 페이지마다 카드 수가 달라지면 Pagination의 세로 위치가 위아래로 움직여 사용성이 떨어집니다. 그래서 페이지당 Grid Slot 수를 Mobile 4개, Tablet 6개, Desktop 9개로 항상 유지하고, 마지막 페이지의 부족한 Slot은 보이지 않는 Placeholder로 채웠습니다. 카드 행 높이도 일정하게 맞춰 페이지 번호가 같은 위치에 머물도록 했고, 페이지 클릭 시 자동 Scroll도 제거했습니다.

---

## E. Contact Validation

**코드 위치**

- `updateFormState()`
- `validateForm()`
- `renderFormErrors()`
- `handleFormSubmit()`

```text
input/submit
→ state.form
→ validateForm()
→ state.form.errors
→ renderFormErrors()
→ DOM
```

**preventDefault 이유**

> Form의 기본 페이지 전환을 막고 JavaScript에서 입력 검증 결과를 같은 화면에 표시하기 위해 사용했습니다.

**보너스 확장**

입력 검증을 통과하면 Formspree Endpoint로 비동기 POST하도록 확장했습니다. 전송 중·성공·실패 상태를 UI로 표시하며, 실제 수신 검증에는 개인 Formspree Endpoint가 필요합니다.

---

## F. HTML / CSS / JavaScript를 왜 분리했나?

> HTML은 구조와 의미, CSS는 표현과 레이아웃, JavaScript는 동작과 상태를 담당하게 하여 책임을 분리했습니다. 수정 범위를 예측하기 쉽고 유지보수가 쉬워집니다.

---

## G. Semantic Tag를 왜 썼나?

> header, nav, main, section, article, footer처럼 내용의 역할을 태그 자체가 설명하게 하여 문서 구조, 접근성, 유지보수성을 높였습니다.

---

## H. CSS Variable을 왜 썼나?

> 색상과 간격을 한 곳에서 관리하면 반복 값을 줄이고, Light/Dark Theme처럼 여러 요소의 값을 한 번에 교체하기 쉽습니다.

---

## I. addEventListener vs onclick

> inline onclick은 HTML에 동작 로직이 섞입니다. addEventListener는 JavaScript에서 이벤트를 관리하므로 구조와 동작을 분리하고 같은 요소에 여러 Listener를 연결하기도 쉽습니다.

---

## J. Flexbox vs Grid

> Navigation처럼 한 축으로 배치하는 UI에는 Flexbox를 사용했고, Project Card처럼 행과 열의 2차원 배치가 필요한 영역에는 Grid를 사용했습니다.

---

## K. State 객체를 왜 쓰나?

> 메뉴, Theme, Projects, Form 상태를 한 구조에서 관리하면 “현재 화면이 왜 이렇게 보이는지”를 추적하기 쉽고, Event → State → Render 흐름을 명확하게 만들 수 있습니다. 단순 변수가 절대 안 되는 것은 아니지만, 상태가 여러 개가 되면 객체가 구조화에 유리합니다.

---

## L. Mobile First를 왜 쓰나?

> 작은 화면에서 필수 콘텐츠와 동작을 먼저 보장한 뒤 넓은 화면에서 점진적으로 확장하면 CSS가 단순해지고 작은 화면의 깨짐을 줄이기 쉽습니다.

---

# 3. 평가 시연 순서 — 2분

1. GitHub Pages 열기
2. 브라우저 폭을 줄여 Mobile 메뉴 확인
3. Dark → 새로고침 → 유지 확인
4. Projects Reload → 카드/상태 확인
5. Contact 빈 값 → 오류 / 정상값 → 성공
6. Scroll → Header/Top 버튼/Reveal
7. README Screenshot와 Evidence 위치 보여주기

---

# 4. 오류 질문 대응

## API가 실패하면?

> `response.ok`를 확인하고 403은 Rate Limit 메시지로 처리합니다. 그 외 오류나 네트워크 실패는 catch에서 error 상태로 바꾸고 다시 시도 버튼을 보여 줍니다.

## localStorage가 없으면?

> Theme는 현재 세션에서는 바뀌지만 새로고침하면 초기값으로 돌아갈 수 있습니다.

## JavaScript가 꺼지면?

> HTML/CSS 기본 내용은 보이지만 Theme, Menu, API, Validation 같은 상호작용은 동작하지 않습니다.

---

# 5. 최종 암기할 핵심어 10개

```text
Semantic HTML
Mobile First
Flexbox
Grid
DOM
Event
State
Render
async/await
GitHub Pages
```

## 한 문장 기억

> **Event가 State를 바꾸고, Render가 DOM을 갱신한다.**


### 카드 글자 수가 서로 다르면 어떻게 처리했나?

> Repository 이름은 2줄, 설명은 3줄까지 표시하고 제목/설명의 line-height를 각각 1.35와 1.65로 정했습니다. 카드 높이와 링크 영역을 고정해서 텍스트 길이가 달라도 전체 Grid와 Pagination 위치가 흔들리지 않게 했습니다.

### GitHub 링크와 웹페이지 링크는 어떻게 구분했나?

> 카드 하단은 버튼이 아니라 가운데 정렬된 텍스트 링크로 구성했습니다. GitHub와 웹페이지가 모두 있으면 `깃허브 | 웹페이지`, GitHub만 있으면 `깃허브`, 웹페이지만 있으면 `웹페이지`로 표시합니다. 실제 URL이 없는 링크는 숨기고, 둘 다 있을 때만 구분자 `|`를 보여 줍니다.


### Projects 카테고리는 어떻게 나눴나?

> 전체와 1. 입학 연수, 2. AI 도구 학습, 3. AI 심화 학습, 4. AI 응용 학습, 5. 파이널 프로젝트의 6개 카테고리로 나눴습니다. 현재 실제 Repository가 준비된 AI 도구 학습은 이름이 `codyssey-basic`으로 시작하는 Repository만 필터링합니다. 입학 연수는 “레포 준비중”, AI 심화/응용/파이널은 “예정” 상태를 명확히 표시합니다.

### 왜 전체와 AI 도구 학습이 현재 같은 목록인가?

> 현재 Repository가 실제로 연결된 과정이 AI 도구 학습뿐이기 때문입니다. 이후 다른 단계 Repository가 연결되면 전체는 모든 준비된 과정 Repository를 합쳐 보여 주도록 확장할 수 있습니다.


### Mission 번호와 진행 상태는 어떻게 관리하나?

> 각 `codyssey-basic-*` Mission Repository를 B1-1부터 B7-2까지 수동 매핑하고 Mission 번호 순서대로 정렬합니다. 현재 미션은 B1-1이고 아직 최종 CLEAR 전이므로 “진행”으로 표시합니다. 상태는 자동 추론하지 않고 `MISSION_PROGRESS`에서 “준비 / 진행 / 완료” 중 하나를 직접 수정합니다. 자동화는 나중에 고도화할 수 있습니다.


---

## K. 공식 보너스 과제

### 프로젝트 언어별 필터링

> GitHub API의 `language` 값을 고유 목록으로 만들고, 사용자가 언어 버튼을 누르면 `array.filter()`로 해당 언어 Repository만 남긴 뒤 기존 Pagination과 Card Render를 다시 사용합니다.

### Hero 타이핑 효과

> Hero 핵심 문장을 JavaScript로 한 글자씩 표시합니다. 사용자가 Reduced Motion을 설정한 경우 애니메이션을 생략해 접근성을 유지합니다.

### 시스템 다크 모드 감지

> 상단 Theme 버튼 하나를 누를 때마다 System → Light → Dark → System 순서로 순환하도록 단순화했습니다. Light/Dark는 사용자 선택을 `localStorage`에 저장해 고정하고, System 모드에서는 `prefers-color-scheme`과 `matchMedia()`로 운영체제 테마 변경을 실시간 반영합니다.

### Formspree 실제 전송

> 기존 Contact Validation을 먼저 수행한 뒤 Formspree Endpoint에 비동기 POST합니다. 전송 중에는 버튼을 비활성화하고, 성공·실패 결과를 같은 화면에 표시합니다. Endpoint가 연결되어 있어 유효한 입력은 Formspree로 전송되며, 전송 중·성공·실패 상태를 같은 화면에 표시합니다.
