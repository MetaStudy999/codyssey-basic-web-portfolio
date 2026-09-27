# B1-1 Round 02 — Implementation Log

> 목적: 실제 구현 과정을 재현 가능한 형태로 기록한다.  
> 원칙: 사용자가 실제 실행한 결과만 PASS로 기록한다.

## Step 1 — 기본 웹 구조 생성

### 목적

B1-1 공식 요구의 기본 파일 역할 분리를 먼저 만든다.

```text
index.html      → HTML 구조
css/style.css   → CSS 표현/반응형
js/script.js    → JavaScript 동작
images/         → 이미지 자원
```

### 실제 생성 명령

```bash
mkdir -p css js images

touch index.html
touch css/style.css
touch js/script.js
touch images/.gitkeep
```

### 실제 확인 결과

```text
=== BRANCH ===
round-02/b1-1-web-portfolio

=== B1-1 WEB STRUCTURE ===
./css/style.css
./js/script.js
./images
./images/.gitkeep
./index.html

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**PASS**

- 현재 작업 브랜치가 `round-02/b1-1-web-portfolio`임을 확인
- `index.html` 생성 확인
- `css/style.css` 생성 확인
- `js/script.js` 생성 확인
- `images/` 및 `.gitkeep` 생성 확인
- `git status`의 `??`는 새 파일이 아직 Git 추적 전이라는 의미이며 오류가 아님
- 아직 구현 내용은 비어 있으므로 기능 PASS는 아님

## 다음 단계

`index.html`에 시맨틱 HTML 구조와 필수 섹션을 작성한다.

필수 섹션:
- Hero
- About
- Skills
- Projects
- Contact
- Footer

필수 시맨틱 요소:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`



## Step 2 — 시맨틱 HTML 구조 작성

### 목적

B1-1 공식 요구에 맞게 HTML 구조와 필수 섹션을 작성한다.

필수 시맨틱 요소:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

필수 섹션:
- Home/Hero
- About
- Skills
- Projects
- Contact
- Footer

추가 확인:
- 외부 CSS 연결
- JavaScript `defer` 연결
- 프로필 자리 표시 이미지 존재

### 실제 검증 결과

```text
=== SEMANTIC TAGS ===
header
nav
main
section
article
footer

=== REQUIRED SECTIONS ===
id="home"
id="about"
id="skills"
id="projects"
id="contact"

=== CSS LINK ===
css/style.css

=== JS DEFER ===
js/script.js (defer)

=== PROFILE IMAGE ===
FOUND

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**PASS**

- 필수 시맨틱 태그 존재 확인
- 필수 섹션 ID 존재 확인
- 외부 CSS 연결 확인
- JavaScript `defer` 연결 확인
- 프로필 이미지 파일 존재 확인
- 새 파일이 아직 Git 추적 전임을 확인
- 아직 CSS/JavaScript 기능 Runtime PASS는 아님

## 다음 단계

CSS 변수, Mobile First, Flexbox, Grid, Dark Theme 기본 스타일을 작성한다.


## Step 3 — CSS 기본 스타일 및 반응형 구조

### 목적

B1-1 공식 요구에 맞게 CSS 변수, 다크 테마, Mobile First, Flexbox, Grid, 768px/1024px breakpoint를 구성한다.

### 실제 검증 결과

```text
=== ROOT VARIABLES ===
:root

=== DARK THEME ===
[data-theme="dark"]

=== FLEXBOX NAV ===
display: flex

=== PROJECT GRID ===
grid-template-columns

=== BREAKPOINTS ===
@media (min-width: 768px)
@media (min-width: 1024px)

=== MOBILE HAMBURGER ===
.menu-toggle

=== INLINE STYLE CHECK ===
NO_INLINE_STYLE

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**PASS**

- CSS 변수 `:root` 확인
- 다크 테마 변수 `[data-theme="dark"]` 확인
- Flexbox 사용 확인
- Projects Grid 구조 확인
- 768px / 1024px 반응형 breakpoint 확인
- 모바일 햄버거 관련 스타일 확인
- HTML inline style 없음 확인
- 파일은 아직 Git 추적 전이며 오류가 아님
- 실제 viewport Runtime 검증은 아직 수행하지 않았으므로 반응형 Runtime PASS는 아님

## 다음 단계

JavaScript에서 Event → State → Render → DOM 흐름을 구현한다.


## Step 4 — JavaScript Event → State → Render 구조

### 목적

B1-1 핵심 학습 목표인 사용자 이벤트 → 상태 변경 → 렌더 → DOM 업데이트 흐름을 JavaScript로 구성한다.

구현 범위:
- 모바일 메뉴 상태
- 다크/라이트 테마 상태
- `localStorage` 테마 유지
- smooth scroll
- 60px 스크롤 시 header 상태 변경
- 300px 스크롤 시 scroll-top 버튼 표시
- `IntersectionObserver` 기반 reveal
- `resize` 시 모바일 메뉴 상태 정리

### 실제 정적 검증 결과

```text
=== STATE ===
const state = {

=== EVENT LISTENERS ===
menuToggle.addEventListener
themeToggle.addEventListener
scrollTopButton.addEventListener
link.addEventListener
window.addEventListener

=== LOCAL STORAGE ===
localStorage.getItem
localStorage.setItem

=== RENDER FUNCTIONS ===
const renderTheme
const renderMenu
const renderScrollUi

=== SCROLL THRESHOLDS ===
NAV_SCROLL_THRESHOLD = 60
SCROLL_TOP_THRESHOLD = 300

=== OBSERVER ===
OBSERVER_THRESHOLD = 0.2
IntersectionObserver

=== NO VAR ===
NO_VAR

=== NO INLINE ONCLICK ===
NO_INLINE_ONCLICK

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**정적 검증 PASS**

- 명시적 상태 객체 존재
- `addEventListener` 기반 이벤트 연결 확인
- `localStorage` get/set 확인
- Theme/Menu/Scroll 렌더 함수 확인
- 공식 기준값 60px / 300px 확인
- IntersectionObserver threshold 0.2 확인
- `var` 미사용 확인
- inline `onclick` 미사용 확인
- 파일은 아직 Git 추적 전
- 브라우저 Runtime 검증 전이므로 햄버거/테마/스크롤 기능 자체는 아직 Runtime PASS가 아님

### 평가 연결

다크 모드 기준 코드 흐름:

```text
click Event
→ toggleTheme()
→ state.theme 변경
→ setTheme()
→ renderTheme()
→ DOM(data-theme) 변경
→ localStorage 저장
```

## 다음 단계

Contact Form의 입력 → 검증 상태 → 에러/성공 렌더 흐름을 구현한다.


## Step 5 — Contact Form 1차 검증 — FAIL

### 실제 검증 결과

```text
=== FORM STATE ===
=== VALIDATION ===
=== ERROR RENDER ===
=== INPUT EVENTS ===
=== SUBMIT EVENT ===
=== PREVENT DEFAULT ===
133:  event.preventDefault();
=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**FAIL — Contact Form 로직이 아직 `js/script.js`에 반영되지 않음**

확인된 사실:
- `state.form` 없음
- `validateForm` 없음
- `renderFormErrors` 없음
- `handleFormInput` 없음
- `handleFormSubmit` 없음
- 보이는 `preventDefault()`는 기존 smooth-scroll 처리 코드일 가능성이 높으며, Contact Form 구현 증거가 아님

### 다음 진단

재설치/전체 파일 교체를 하지 않고, 현재 `js/script.js`의 Initialization 주변 실제 구조를 먼저 확인한 뒤 최소 수정한다.


## Step 5-1 — Contact Form 삽입 실패 원인 진단

### 실제 확인 결과

```text
=== INITIALIZATION AREA ===
Initialization marker 존재
initializeApp() 존재

=== RESIZE AREA ===
window.addEventListener("resize", handleResize) 존재

=== CONTACT SYMBOLS ===
NO_CONTACT_FORM_CODE

=== PYTHON ===
Python 3.12.3

=== STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

- `Initialization` marker는 실제 파일에 존재함
- `resize` 이벤트 구간도 실제 파일에 존재함
- Python 3.12.3 사용 가능
- Contact Form 관련 심볼은 전혀 없음
- 따라서 현재 파일 구조 자체가 삽입을 방해한 것은 아님
- 이전 Contact Form 삽입 단계가 실제 파일에 반영되지 않은 상태로 확인됨

### 최소 수정 원칙

전체 `script.js`를 덮어쓰지 않고,
1. Contact Form 로직 블록을 `Initialization` 직전에 삽입
2. Contact 이벤트 연결을 `resize` 이벤트 직전에 삽입
3. CSS에는 결과 상태 class만 추가
4. 정적 검증 재수행



## Step 5-2 — Contact Form 재적용 및 재검증 — PASS

### 실제 검증 결과

```text
=== FORM STATE ===
state.form

=== VALIDATION ===
EMAIL_PATTERN
validateForm

=== ERROR RENDER ===
renderFormErrors

=== INPUT EVENTS ===
handleFormInput

=== SUBMIT EVENT ===
handleFormSubmit

=== CONTACT LISTENER ===
contactForm.addEventListener

=== RESULT CLASSES ===
.form-result.is-error
.form-result.is-success

=== PREVENT DEFAULT ===
smooth-scroll preventDefault
contact submit preventDefault

=== STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**정적 재검증 PASS**

- Contact Form 상태 객체 확인
- 이메일 정규식 및 검증 함수 확인
- 필드별 오류 렌더 함수 확인
- `input` 이벤트 처리 확인
- `submit` 이벤트 처리 확인
- `event.preventDefault()` 제출 처리 확인
- 성공/실패 CSS 상태 class 확인
- 1차 FAIL 이후 원인 진단 → 최소 수정 → 재검증 PASS 흐름 완료
- 아직 실제 브라우저에서 invalid/valid 입력을 수행하지 않았으므로 Form Runtime PASS는 아님

### 평가 연결

```text
input Event
→ updateFormState()
→ state.form 변경
→ validateForm()
→ state.form.errors 변경
→ renderFormErrors()
→ DOM 오류 메시지 변경

submit Event
→ preventDefault()
→ validateForm()
→ error 또는 success 결과 렌더
```

## 다음 단계

GitHub API의 loading / success / error / empty 상태와 재시도 흐름을 구현한다.


## Step 6 — GitHub API 상태 흐름 정적 검증 — PASS

### 실제 검증 결과

```text
=== GITHUB USER ===
GITHUB_USERNAME = "MetaStudy999"

=== API FETCH ===
api.github.com
fetch(url)

=== ASYNC TRY CATCH ===
loadProjects = async
try {
catch (error)

=== PROJECT STATES ===
loading
error
empty
success

=== ARRAY METHODS ===
forEach()
map()
filter()

=== RETRY BUTTON ===
id="reload-projects"

=== RATE LIMIT 403 ===
response.status === 403

=== PROJECT LISTENER ===
reloadProjectsButton.addEventListener

=== GIT STATUS ===
?? css/
?? images/
?? index.html
?? js/
```

### 판정

**정적 검증 PASS**

- GitHub 사용자명 상수 확인
- GitHub REST API endpoint 및 `fetch()` 호출 확인
- `async/await` + `try/catch` 흐름 확인
- loading / success / error / empty 상태 확인
- `filter()` / `map()` / `forEach()` 실제 사용 확인
- 재시도 버튼과 click listener 확인
- 403 rate limit 에러 처리 확인
- 아직 브라우저에서 실제 GitHub API 네트워크 호출을 검증하지 않았으므로 API Runtime PASS는 아님

### 평가 연결

```text
loadProjects()
→ state.projects = loading
→ renderProjects()
→ fetch GitHub API
→ success / empty / error
→ renderProjects()
→ DOM 업데이트
```

## 다음 단계

정적 구현을 멈추고 로컬 HTTP 서버에서 실제 브라우저 Runtime 검증을 시작한다.


## Step 7 — Local HTTP Server Runtime — PASS

### 실제 실행 결과

```text
=== PORT 8000 CHECK ===
PORT_8000_FREE
SERVER_PID=2634

=== HTTP ROOT ===
HTTP/1.0 200 OK
Server: SimpleHTTP/0.6 Python/3.12.3
Content-type: text/html
Content-Length: 5582

=== HTML TITLE ===
<title>My Portfolio | B1-1</title>

=== CSS HTTP ===
200

=== JS HTTP ===
200
```

### 판정

**Local HTTP Server Runtime PASS**

- TCP 8000 포트가 비어 있음을 확인
- Python 3.12.3 `http.server` 기동 성공
- Root `/` HTTP 200 확인
- `index.html` title 확인
- `css/style.css` HTTP 200 확인
- `js/script.js` HTTP 200 확인
- 로컬 서버 프로세스 PID 2634 기록
- 아직 브라우저 화면/상호작용 Runtime 검증은 별도 진행 필요

## 다음 단계

Chrome에서 `http://localhost:8000`을 열고 초기 화면/Projects API 표시 여부를 확인한다.


## Step 8 — Browser Initial Runtime — PASS

### 사용자 실제 확인 결과

Chrome에서 `http://localhost:8000` 접속 후 다음 4개 항목을 실제 확인했다.

```text
1. 상단 My Portfolio / 메뉴 표시: 정상
2. Hero / About / Skills / Projects / Contact 표시: 정상
3. Projects 영역 GitHub 저장소 카드 표시: 정상
4. 전체 CSS 적용 및 화면 깨짐 없음: 정상
```

### 판정

**Browser Initial Runtime PASS**

- HTML 주요 섹션 브라우저 표시 정상
- CSS 적용 정상
- GitHub API success 상태의 카드 렌더링 정상
- 초기 화면 구성에 치명적 레이아웃 오류 없음
- 아직 다크 모드/새로고침 유지/햄버거/스크롤/폼/반응형 viewport는 별도 검증 필요

## 다음 단계

다크 모드 토글과 새로고침 후 상태 유지(localStorage)를 실제 브라우저에서 검증한다.


## Step 9 — Dark Mode + localStorage Runtime — PASS

### 사용자 실제 확인 결과

Chrome에서 `http://localhost:8000` 접속 후 다음 항목을 실제 확인했다.

```text
1. 다크 모드 전환: 정상
2. 새로고침 후 다크 모드 유지: 정상
3. 버튼 Dark → Light 변경: 정상
4. Light → 밝은 테마 복귀: 정상
```

### 판정

**PASS**

- `click` 이벤트로 테마 전환 정상
- `state.theme` 변경 후 렌더 정상
- `data-theme` DOM 반영 정상
- `localStorage` 저장/복원 정상
- 새로고침 후 상태 유지 확인
- 토글 버튼 라벨 상태 변화 확인

### 평가 연결

```text
Event(click)
→ State(theme)
→ Render(renderTheme)
→ DOM(data-theme)
→ localStorage 저장
→ Reload 시 localStorage 복원
```

## 다음 단계

모바일 viewport에서 햄버거 메뉴 열기/닫기와 메뉴 선택 후 자동 닫힘을 실제 브라우저에서 검증한다.


## Step 10 — Mobile Hamburger Runtime — PASS

### 사용자 실제 확인 결과

Chrome 모바일 viewport(약 375px)에서 다음 항목을 실제 확인했다.

```text
1. 햄버거 버튼 표시: 정상
2. 메뉴 열기: 정상
3. 메뉴 닫기: 정상
4. 메뉴 클릭 이동: 정상
5. 이동 후 자동 닫힘: 정상
```

### 판정

**PASS**

- 모바일 breakpoint에서 햄버거 버튼 표시 정상
- 메뉴 open/close 상태 전환 정상
- 메뉴 항목 anchor 이동 정상
- smooth scroll 정상
- 메뉴 선택 후 `state.menuOpen = false` 흐름 정상
- 모바일 메뉴 Event → State → Render → DOM Runtime 확인

## 다음 단계

스크롤 60px 이상에서 Header 상태 변경, 300px 이상에서 Scroll Top 버튼 표시/동작을 실제 브라우저에서 검증한다.
