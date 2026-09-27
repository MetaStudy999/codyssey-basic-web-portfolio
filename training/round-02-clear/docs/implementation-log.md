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


## Step 11 — Scroll State Runtime — PASS

### 사용자 실제 확인 결과

Chrome에서 다음 항목을 실제 확인했다.

```text
1. Header 스크롤 상태 변경: 정상
2. Scroll Top 버튼 표시: 정상
3. 맨 위로 이동: 정상
4. 맨 위에서 버튼 숨김: 정상
```

### 판정

**PASS**

- 60px 이상 스크롤 시 Header `scrolled` 상태 반영 정상
- 300px 이상 스크롤 시 Scroll Top 버튼 표시 정상
- Scroll Top 클릭 시 smooth scroll로 맨 위 이동 정상
- 맨 위 복귀 후 버튼 숨김 정상
- `window.scrollY` → 상태 판정 → classList 렌더 흐름 Runtime 확인

## 다음 단계

Contact Form에서 invalid/valid 입력을 실제 브라우저에서 검증한다.


## Step 12 — Contact Form Runtime — PASS

### 사용자 실제 확인 결과

Chrome에서 Contact Form의 invalid / valid 시나리오를 실제 확인했다.

```text
1. 빈 값 오류 표시: 정상
2. 이메일 형식 오류 표시: 정상
3. 필드별 오류 메시지 위치: 정상
4. 정상 입력 성공 메시지: 정상
```

### 판정

**PASS**

- 필수 입력값 누락 시 오류 표시 정상
- 잘못된 이메일 형식 검증 정상
- 각 필드 근처 오류 메시지 렌더 정상
- 정상 입력 시 성공 메시지 렌더 정상
- `submit` 기본 동작을 막고 검증 결과에 따라 UI가 변경되는 Runtime 확인
- 이 단계의 성공은 폼 검증 UI에 대한 것이며 실제 이메일 전송 기능을 의미하지 않음

### 평가 연결

```text
input / submit Event
→ state.form 갱신
→ validateForm()
→ state.form.errors
→ renderFormErrors()
→ DOM 오류/성공 메시지
```

## 다음 단계

GitHub API의 실제 success 상태와 재시도 버튼 동작을 브라우저에서 확인한다.


## Step 13 — GitHub API Success/Reload Runtime — PASS

### 실제 확인 근거

이전 Browser Initial Runtime에서 이미 다음을 확인했다.

```text
GitHub 프로젝트 카드 표시: 정상
```

이번 단계에서 추가로 사용자가 다음을 실제 확인했다.

```text
상태 문구 표시: 정상
다시 불러오기 로딩 상태: 정상
재로딩 후 카드 표시: 정상
```

### 판정

**PASS**

- GitHub 프로젝트 카드 실제 렌더 정상
- 상태 문구 표시 정상
- 재로딩 클릭 시 loading 상태 전환 정상
- 로딩 후 success 상태로 복귀 및 카드 재렌더 정상
- `fetch → loading → success → renderProjects → DOM` Runtime 흐름 확인
- 아직 error/retry 복구 및 empty 상태 Runtime 검증은 별도 필요

## 다음 단계

Chrome DevTools의 Network Offline 기능을 사용해 소스 코드를 수정하지 않고 API error 상태를 안전하게 재현하고, `다시 시도` UI와 온라인 복구를 검증한다.


## Step 14 — GitHub API Error/Retry Runtime — PASS

### 사용자 실제 확인 결과

Chrome DevTools Network를 Offline으로 전환해 API 실패를 안전하게 재현한 뒤, Online 복구 후 다시 시도했다.

```text
1. Offline에서 API 오류 메시지: 정상
2. 버튼이 '다시 시도'로 변경: 정상
3. Online 복구 후 다시 시도: 정상
4. 프로젝트 카드 다시 표시: 정상
```

### 판정

**PASS**

- 네트워크 실패 시 `catch` 경로 진입 정상
- error 상태 렌더 정상
- 재시도 버튼 라벨 변경 정상
- 네트워크 복구 후 retry 정상
- loading → success 복귀 정상
- 카드 재렌더 정상

### 평가 연결

```text
Network Offline
→ fetch 실패
→ catch(error)
→ state.projects.status = error
→ renderProjects()
→ "다시 시도"

Network Online
→ retry click
→ loading
→ fetch success
→ success
→ 카드 재렌더
```

## 다음 단계

empty 상태를 실제 UI에서 안전하게 재현해 확인한다.


## Step 15 — GitHub API Empty Runtime — PASS

### 사용자 실제 확인 결과

브라우저 Console에서 프로젝트 상태를 일시적으로 `empty`로 변경하여 UI를 안전하게 재현하고, 다시 불러오기로 success 상태를 복구했다.

```text
1. empty 메시지 표시: 정상
2. 기존 카드 숨김: 정상
3. 다시 불러오기 클릭: 정상
4. success 상태로 복구: 정상
```

### 판정

**PASS**

- `state.projects.status = empty` 상태의 UI 렌더 정상
- empty 상태에서 기존 프로젝트 카드 제거 정상
- 다시 불러오기 버튼 동작 정상
- loading → success 복구 정상
- GitHub API의 loading / success / error / empty / retry 상태 Runtime 흐름을 모두 확인함

### 전체 API 상태 흐름

```text
idle
→ loading
→ success
   ├─ reload → loading → success
   ├─ Offline → error → retry → success
   └─ empty → reload → loading → success
```

## 다음 단계

desktop / tablet / mobile viewport에서 반응형 레이아웃을 실제 브라우저로 검증한다.


## Step 16 — Responsive Runtime — PASS

### 사용자 실제 확인 결과

Chrome DevTools에서 다음 viewport를 실제 확인했다.

```text
1. 모바일 375px: 정상
2. 태블릿 768px: 정상
3. 데스크톱 1200px: 정상
4. 가로 스크롤/레이아웃 깨짐: 없음
```

### 판정

**PASS**

- Mobile First 레이아웃 Runtime 정상
- 375px 모바일 화면 정상
- 768px 태블릿 breakpoint Runtime 정상
- 1200px 데스크톱 화면 정상
- 가로 overflow 없음
- 주요 섹션 레이아웃 깨짐 없음
- Navigation / About / Projects Grid가 viewport 변화에 맞춰 정상 반응

### 평가 연결

- Mobile First로 작은 화면을 기본으로 설계하고 768px, 1024px 이상에서 넓은 화면 규칙을 추가했다.
- Navigation은 한 방향 정렬이 중심이므로 Flexbox를 사용했다.
- Projects는 카드가 행/열로 배치되므로 Grid를 사용했다.

## 다음 단계

IntersectionObserver 기반 스크롤 애니메이션 Runtime을 확인한다.


## Step 17 — IntersectionObserver Runtime — PASS

### 사용자 실제 확인 결과

Chrome에서 페이지를 새로고침한 뒤 아래로 스크롤하면서 섹션 reveal 동작을 실제 확인했다.

```text
1. 섹션 진입 애니메이션: 정상
2. About/Skills/Projects/Contact 적용: 정상
3. 한 번만 실행: 정상
4. 반복 깜빡임 없음: 정상
```

### 판정

**PASS**

- `IntersectionObserver` 기반 섹션 진입 애니메이션 정상
- About / Skills / Projects / Contact 적용 정상
- 관찰 후 `unobserve()`되어 한 번만 실행
- 재스크롤 시 반복 깜빡임 없음
- `threshold: 0.2` 기반 Runtime 동작 확인

### 평가 연결

```text
section observe
→ viewport 진입
→ isIntersecting = true
→ is-visible class 추가
→ CSS transition 실행
→ observer.unobserve()
```

## 다음 단계

정적 검증 결과를 실제 Evidence 파일로 저장하고, 구현 파일과 Evidence를 첫 Git 커밋으로 기록한다.


## Step 19 — GitHub CLI Auth + Push — PASS

### 사용자 실제 확인 결과

```text
=== LOCAL HEAD ===
c204364

=== REMOTE HEAD ===
c204364

=== STATUS ===
## round-02/b1-1-web-portfolio...origin/round-02/b1-1-web-portfolio

=== LATEST COMMIT ===
c204364 feat: implement B1-1 responsive web portfolio
```

GitHub 원격 브랜치도 동일 커밋을 가리키는 것을 추가 확인했다.

```text
remote branch head = c204364
```

### 판정

**PASS**

- GitHub CLI(gh) 설치 완료
- GitHub 계정 `MetaStudy999` 인증 완료
- Repository 접근 확인
- rebase 후 충돌 없음
- 로컬 HEAD와 원격 HEAD 동일
- ahead / behind 없음
- 작업 트리 clean
- 구현 + Evidence가 원격 Round 02 브랜치에 반영됨

### 참고

최초 로컬 구현 커밋 `14214fc`는 rebase 과정에서 `c204364`로 SHA가 변경되었다.
이는 커밋 내용이 유지되면서 부모 커밋이 변경될 때 정상적으로 발생하는 동작이다.

## 다음 단계

Repository 루트 `README.md`를 현재 B1-1 결과에 맞게 정리한 뒤 GitHub Pages 배포 준비를 진행한다.


## Step 20 — Root README Update/Push — PASS

### 사용자 실제 확인 결과

```text
=== LOCAL HEAD ===
07f3b03

=== REMOTE HEAD ===
07f3b03

=== STATUS ===
## round-02/b1-1-web-portfolio...origin/round-02/b1-1-web-portfolio

=== LATEST COMMIT ===
07f3b03 docs: update README for B1-1 round 02
```

### 판정

**PASS**

- Root `README.md`를 현재 제2기 B1-1 기준으로 전환
- Legacy B4-1 / Round 01 자료는 참고자료로 보존
- README 커밋 생성 완료
- Local HEAD와 Remote HEAD 동일
- ahead / behind 없음
- 다음 단계: GitHub Pages 현재 상태 확인 후 배포 설정


## Step 23 — GitHub Pages HTTP Deployment Check — PASS

### 사용자 실제 확인 결과

```text
status=built
url=https://metastudy999.github.io/codyssey-basic-web-portfolio/
source=main:/

HTTP_STATUS=200
PASS deployed B1-1 index.html
CSS_HTTP_STATUS=200
JS_HTTP_STATUS=200
DEPLOY_HTTP_CHECK=PASS
```

### 판정

**PASS — GitHub Pages HTTP 배포 확인**

- GitHub Pages 상태: `built`
- 배포 Source: `main:/`
- HTML 응답: HTTP 200
- 배포된 `index.html`에서 `My Portfolio | B1-1` 확인
- CSS 응답: HTTP 200
- JavaScript 응답: HTTP 200
- 실제 배포 URL: `https://metastudy999.github.io/codyssey-basic-web-portfolio/`

### 주의

이 단계는 HTTP 배포와 정적 자산 제공을 검증한 것이다.
최종 GitHub Pages Runtime PASS를 위해 실제 Chrome에서 UI/Interaction/API/Responsive 재검증이 남아 있다.


## Step 24 — GitHub Pages Browser Runtime — PASS

### 사용자 실제 확인 결과

실제 배포 URL `https://metastudy999.github.io/codyssey-basic-web-portfolio/` 를 Chrome에서 열어 다음 항목을 확인했다.

```text
1. 실제 Pages 기본 화면: 정상
2. Dark Mode + 새로고침 유지: 정상
3. GitHub Projects API + 재로딩: 정상
4. 모바일 375px + 햄버거: 정상
5. Contact / Scroll / Reveal: 정상
```

### 판정

**PASS — GitHub Pages Browser Runtime**

- 실제 배포 페이지 기본 렌더 정상
- Dark Mode 및 localStorage persistence 정상
- GitHub Projects API 렌더 및 reload 정상
- 모바일 375px 반응형 및 Hamburger Menu 정상
- Contact Form validation 정상
- Scroll Top / Scroll Reveal 정상

### 상태

GitHub Pages의 HTTP 배포 확인과 실제 Browser Runtime 재검증까지 완료했다.

### 다음 단계

제출용 Screenshot Evidence(Desktop / Mobile / Dark Mode)를 실제 배포 페이지 기준으로 확보한다.


## Step 25 — Screenshot Capture — PASS

### 사용자 실제 확인 결과

실제 GitHub Pages 배포 화면을 기준으로 다음 Screenshot을 Mac에서 촬영했다.

```text
1. Desktop Light: 완료
2. Mobile 375px: 완료
3. Desktop Dark: 완료
```

### 판정

**PASS — Screenshot 촬영 완료**

촬영 대상:
- Desktop Light
- Mobile 375px
- Desktop Dark

### 주의

이 단계에서는 Screenshot 촬영 완료만 확인했다.
아직 파일이 Repository의 `training/round-02-clear/evidence/`에 복사·검증·커밋된 것은 아니다.

### 다음 단계

Mac Desktop의 Screenshot 파일을 OrbStack Ubuntu에서 접근 가능한 경로로 확인한 뒤
`training/round-02-clear/evidence/`에 복사하고 실제 파일 존재를 검증한다.


## Step 26-1 — Screenshot Source Path Discovery — PASS

### 사용자 실제 확인 결과

OrbStack Ubuntu에서 Mac Desktop의 실제 Screenshot 파일 3개를 확인했다.

```text
/mnt/mac/Users/metastudy9997479/Desktop/b1-1-pages-desktop-dark.png
/mnt/mac/Users/metastudy9997479/Desktop/b1-1-pages-desktop-light.png
/mnt/mac/Users/metastudy9997479/Desktop/b1-1-pages-mobile-375.png
```

### 판정

**PASS — Screenshot 원본 경로 확인 완료**

- Desktop Light 원본 확인
- Mobile 375px 원본 확인
- Desktop Dark 원본 확인
- 다음 단계에서 Round 02 Evidence 디렉터리로 복사하고 파일 크기/형식/해시를 검증한다.


## Step 26-2 — Screenshot Evidence Import — PARTIAL PASS

### 사용자 실제 확인 결과

Round 02 Evidence 디렉터리에 Screenshot 3개를 복사했다.

```text
PASS training/round-02-clear/evidence/b1-1-pages-desktop-light.png
PASS training/round-02-clear/evidence/b1-1-pages-mobile-375.png
PASS training/round-02-clear/evidence/b1-1-pages-desktop-dark.png
```

파일 크기:

```text
desktop-dark.png  531K
desktop-light.png 240K
mobile-375.png    186K
```

SHA-256:

```text
dc34ebbe3890e19c89f57ae02e6008e7f400b0ce61b0bc7c900f6498c4e12641  desktop-light
0bfee5124c093dd307058908479fa2b5ababadbbeb94904949debe3ce4930f17  mobile-375
6d8f260d06b84c0b36456a55e633c7a2df24fc8c870cd751c079a100d55f198b  desktop-dark
```

Git 상태에서 세 파일은 아직 untracked 상태임을 확인했다.

### 오류

`file` 명령 실행 결과:

```text
-bash: file: command not found
```

### 판정

**PARTIAL PASS**

- 파일 존재: PASS
- 비어 있지 않음: PASS
- 파일 크기 확인: PASS
- SHA-256 확인: PASS
- PNG 형식 검증: PENDING
- Git add/commit: PENDING

`file` 패키지를 즉시 재설치하지 않고, Python 표준 라이브러리로 PNG Signature/IHDR을 확인하는 최소 검증으로 진행한다.


## Step 26-3 — Screenshot PNG Verification — PASS

### 사용자 실제 확인 결과

Python 표준 라이브러리로 PNG Signature와 IHDR을 검증했다.

```text
PASS b1-1-pages-desktop-light.png
format=PNG
width=2324
height=2280

PASS b1-1-pages-mobile-375.png
format=PNG
width=752
height=2044

PASS b1-1-pages-desktop-dark.png
format=PNG
width=2334
height=2380

PNG_VERIFY=PASS
```

### 판정

**PASS**

- Desktop Light: PNG 형식 정상
- Mobile 375px: PNG 형식 정상
- Desktop Dark: PNG 형식 정상
- 세 파일 모두 PNG Signature 및 IHDR 검증 완료
- Screenshot Evidence 파일은 아직 Git untracked 상태
- 다음 단계: Screenshot Evidence 3개를 Git add / commit / push


## Step 26-4 — Screenshot Evidence Git Commit/Push — PASS

### 사용자 실제 확인 결과

```text
=== LOCAL HEAD ===
c77217c

=== REMOTE HEAD ===
c77217c

=== STATUS ===
## main...origin/main

=== LATEST COMMIT ===
c77217c docs: add B1-1 screenshot evidence
```

GitHub 원격 `main` 브랜치와 Evidence 디렉터리도 추가 확인했다.

```text
remote main head = c77217c
desktop-light = FOUND
mobile-375 = FOUND
desktop-dark = FOUND
```

### 판정

**PASS**

- Screenshot Evidence 3개 Git stage 완료
- `git diff --cached --check` 오류 없음
- Commit 생성: `c77217c`
- `main` 원격 push 완료
- Local HEAD = Remote HEAD
- ahead / behind 없음
- 실제 GitHub Evidence 디렉터리에서 Screenshot 3개 존재 확인

### Screenshot Evidence

```text
training/round-02-clear/evidence/b1-1-pages-desktop-light.png
training/round-02-clear/evidence/b1-1-pages-mobile-375.png
training/round-02-clear/evidence/b1-1-pages-desktop-dark.png
```

## 다음 단계

공식 요구사항 → 구현 → 검증 → Evidence → 평가 설명 연결 상태를 최종 점검한다.


## Step 27-2 — README Screenshot Links Commit/Push — PASS

### 사용자 실제 확인 결과

```text
=== LOCAL HEAD ===
0d80901

=== REMOTE HEAD ===
0d80901

=== STATUS ===
## main...origin/main

=== LATEST COMMIT ===
0d80901 docs: link B1-1 screenshot evidence in README
```

GitHub 원격 main에서도 README의 Screenshot Evidence 링크 3개를 확인했다.

### 판정

**PASS**

- README Screenshot 섹션 반영 완료
- Desktop Light 링크 확인
- Mobile 375px 링크 확인
- Desktop Dark 링크 확인
- Local HEAD = Remote HEAD
- ahead / behind 없음
- Commit: `0d80901`


## Step 28-1 — innerHTML Dynamic HTML Static Verification — PASS

### 사용자 실제 실행 결과

```text
PASS source updated

=== INNERHTML ===
325: projectsStatus.innerHTML =

=== TEMPLATE HTML ===
326: `<span><strong>${items.length}</strong>개의 공개 프로젝트를 불러왔습니다.</span>`

=== MAP / FILTER / FOREACH ===
forEach / map / filter 확인

=== DIFF CHECK ===
출력 없음

=== STATUS ===
 M js/script.js
```

### 판정

**PASS — 정적 검증**

- `innerHTML` 사용 확인
- 템플릿 리터럴 기반 동적 HTML 생성 확인
- 동적 값은 외부 Repository 문자열이 아니라 `items.length` 숫자만 삽입
- 기존 `map()`, `filter()`, `forEach()` 유지
- `git diff --check` 오류 없음
- 현재 수정 파일은 `js/script.js` 1개
- 실제 Browser Runtime 재검증은 아직 PENDING

### 다음 단계

로컬 브라우저에서 GitHub Projects success / reload 상태가 기존처럼 정상인지 확인한다.


## Step 28-2 — innerHTML Runtime Recheck — PASS

### 사용자 실제 확인 결과

로컬 웹서버에서 수정된 `js/script.js`를 로드한 뒤 Projects 섹션을 실제 브라우저에서 재검증했다.

```text
1. 프로젝트 카드 표시: 정상
2. 프로젝트 개수 굵게 표시: 정상 — 8개 공개 프로젝트를 불러왔습니다.
3. 다시 불러오기 후 정상 복구: 정상
```

### 판정

**PASS — Runtime Recheck**

- GitHub Project 카드 렌더 정상
- `innerHTML` 기반 상태 문구 정상
- 템플릿 리터럴의 `items.length` 값 정상 반영
- reload → loading → success 복구 정상
- 기존 API 기능 회귀(regression) 없음

### 다음 단계

README에 실제 구현 기준값인 Navigation 60px, Scroll Top 300px, IntersectionObserver threshold 0.2를 명시한다.


## Step 28-3 — README Runtime Thresholds — PASS

### 사용자 실제 확인 결과

```text
PASS README runtime thresholds updated

=== README THRESHOLDS ===
Navigation Header 상태 변경: 60px 이상
Scroll Top 버튼 표시: 300px 이상
threshold: 0.2

=== DIFF CHECK ===
출력 없음

=== STATUS ===
 M README.md
 M js/script.js
```

### 판정

**PASS**

- Navigation Header 기준값 `60px` README 명시
- Scroll Top 기준값 `300px` README 명시
- IntersectionObserver `threshold: 0.2` README 명시
- `git diff --check` 오류 없음
- 현재 기능 보완 수정 파일은 `README.md`, `js/script.js`
- 다음 단계: 두 파일을 최종 정적 검사 후 commit / push
