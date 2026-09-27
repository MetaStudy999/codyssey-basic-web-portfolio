# B1-1 Round 02 — JIT Learning

> 목적: 구현 전에 이번 미션에 필요한 개념만 빠르게 이해한다.  
> 방식: 쉬운 한 문장 → 정확한 정의 → 이번 미션 역할 → 작은 예 → 실제 적용.

## 1. HTML — 구조

**쉬운 한 문장:** HTML은 웹페이지의 뼈대다.

정확히는 **하이퍼텍스트 마크업 언어(HyperText Markup Language, HTML)** 로, 문서의 구조와 의미를 표현한다.

이번 미션에서는:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

같은 시맨틱 태그(Semantic Tag)를 사용한다.

작은 예:

```html
<section id="about">
  <h2>About</h2>
  <p>자기소개</p>
</section>
```

핵심 설명:
> HTML은 “무엇이 있는가”와 “각 부분이 무슨 의미인가”를 담당한다.

---

## 2. CSS — 표현과 레이아웃

**쉬운 한 문장:** CSS는 뼈대에 디자인과 배치를 입힌다.

정확히는 **종속형 스타일 시트(Cascading Style Sheets, CSS)** 로, HTML 요소의 색상·간격·크기·배치·반응형 표현을 제어한다.

이번 미션에서는:
- CSS 변수 `:root`
- Flexbox
- Grid
- Mobile First
- 768px / 1024px breakpoint
- Dark Mode

를 사용한다.

### Flexbox vs Grid

- **Flexbox**: 한 방향 정렬에 유리
- **Grid**: 행과 열을 함께 배치할 때 유리

이번 미션:
- Navigation → Flexbox
- Projects Cards → Grid

핵심 설명:
> CSS는 “어떻게 보이는가”와 “화면 크기에 따라 어떻게 배치되는가”를 담당한다.

---

## 3. JavaScript — 동작

**쉬운 한 문장:** JavaScript는 사용자의 행동에 웹페이지가 반응하게 만든다.

정확히는 **자바스크립트(JavaScript, JS)** 로, 브라우저에서 이벤트를 처리하고 상태를 바꾸며 DOM을 수정한다.

이번 미션에서는:
- 햄버거 버튼
- 다크 모드
- 스크롤 버튼
- 폼 검증
- GitHub API

를 JavaScript로 구현한다.

핵심 설명:
> JavaScript는 “무슨 일이 일어났을 때 무엇을 바꿀 것인가”를 담당한다.

---

## 4. DOM — JavaScript가 HTML을 다루는 방법

**문서 객체 모델(Document Object Model, DOM)** 은 브라우저가 HTML을 JavaScript에서 다룰 수 있는 객체 구조로 바꾼 것이다.

예:

```js
const button = document.querySelector("#theme-toggle");

button.addEventListener("click", () => {
  document.documentElement.dataset.theme = "dark";
});
```

흐름:

```text
HTML 요소
→ querySelector로 선택
→ addEventListener로 이벤트 연결
→ DOM 변경
→ 화면 변화
```

---

## 5. Event — 사용자의 행동

**이벤트(Event)** 는 클릭, 입력, 제출, 스크롤처럼 브라우저에서 발생하는 사건이다.

이번 미션에서 필요한 이벤트:
- `click`
- `input`
- `submit`
- `scroll`

예:

```js
button.addEventListener("click", handleClick);
```

핵심:
> 이벤트는 화면 변화의 시작점이다.

---

## 6. State — 현재 상태

**상태(State)** 는 현재 UI가 어떤 상황인지 나타내는 값이다.

예:
- 현재 테마: light / dark
- 프로젝트 API 상태: loading / success / error / empty
- 폼 상태: valid / invalid

이번 미션의 핵심 흐름:

```text
사용자 이벤트
→ State 변경
→ Render 실행
→ DOM 업데이트
→ 화면 변화
```

예:

```js
state.theme = "dark";
renderTheme();
```

특정 이름의 `STATE` 객체 자체가 공식 요구는 아니다. 중요한 것은 상태와 렌더 흐름이 명확한 것이다.

---

## 7. Render — 상태를 화면에 반영

**렌더(Render)** 는 상태를 실제 화면 표현으로 바꾸는 과정이다.

예:

```js
const renderTheme = () => {
  document.documentElement.dataset.theme = state.theme;
};
```

이번 미션에서 최소 3개 흐름:
1. Theme State → Render
2. Project API State → Render
3. Form Validation State → Render

---

## 8. API — 외부 서비스 데이터 가져오기

**응용 프로그램 인터페이스(Application Programming Interface, API)** 는 프로그램끼리 데이터를 주고받는 규칙이다.

이번 미션에서는 GitHub API를 호출한다.

```text
Browser
→ fetch()
→ GitHub API
→ JSON 응답
→ JavaScript
→ Projects 카드 렌더링
```

예:

```js
const response = await fetch(url);
const repos = await response.json();
```

---

## 9. Async/Await — 기다리는 코드

GitHub API 응답은 바로 오지 않는다.

**비동기 처리(Asynchronous Processing)** 는 기다리는 동안 프로그램 전체를 멈추지 않는 방식이다.

```js
try {
  const response = await fetch(url);
  const data = await response.json();
} catch (error) {
  // 실패 상태 처리
}
```

- `await`: 비동기 작업 결과를 기다림
- `try/catch`: 성공/실패 분기

이번 미션의 화면 상태:

```text
loading
→ success
   or error
   or empty
```

---

## 10. localStorage — 브라우저에 작은 값 저장

**로컬 스토리지(Local Storage, localStorage)** 는 브라우저에 문자열 값을 저장하는 공간이다.

이번 미션에서는 다크 모드 설정을 저장한다.

```js
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
```

그래서 페이지를 새로고침해도 테마가 유지된다.

---

# 한 문장 전체 구조

```text
HTML은 구조,
CSS는 표현,
JavaScript는 동작,
DOM은 JS가 HTML을 다루는 객체 구조,
Event는 변화의 시작,
State는 현재 상태,
Render는 상태를 화면에 반영,
API는 외부 데이터 연결,
async/await는 비동기 흐름,
localStorage는 브라우저 상태 유지다.
```

# Gate 4 확인 질문

다음 문장을 자기 말로 설명할 수 있으면 구현을 시작한다.

> “다크 모드 버튼을 눌렀을 때 이벤트가 발생하고, 테마 상태가 바뀌고, 렌더 함수가 DOM을 수정하며, 그 상태를 localStorage에 저장해서 새로고침 후에도 유지됩니다.”

