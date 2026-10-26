# B1-1 — 핵심 기술 용어집

> **입문 학습용** · 신뢰도와 최신 요구사항 정합성은 01단계 공식 자료 분석에서 확인합니다. 실제 기능 구현·평가 NOT_VERIFIED.

## 1. 웹 화면과 문서

| 용어 | 영어·원명 | 한 문장 정의 | 간단한 예 |
|---|---|---|---|
| **HTML** | HyperText Markup Language | 내용과 문서의 의미를 표현 | `<main>`, `<p>` |
| **시맨틱 요소** | Semantic HTML | 문서 구조의 역할이 드러나는 요소 | `<nav>`, `<footer>` |
| **CSS** | Cascading Style Sheets | 글자·색·배치 등을 결정하는 스타일 규칙 | `color`, `display` |
| **선택자** | CSS Selector | 스타일·DOM 조작의 대상 요소를 지정 | `.card`, `#title` |
| **class / id** | Attributes | 요소에 이름·식별자를 붙이는 HTML 속성 | `class="card"` |
| **Flexbox** | Flexible Box Layout | 주로 한 방향 정렬에 적합한 CSS 레이아웃 | 가로 메뉴 |
| **Grid** | CSS Grid Layout | 행과 열로 구성된 2차원 레이아웃 | 프로젝트 카드 격자 |
| **반응형** | Responsive Web Design | 기기·화면 크기에 맞는 레이아웃 | 모바일 1열 |
| **미디어 쿼리** | Media Query | 화면 조건에 따라 CSS를 다르게 적용 | `@media` |
| **웹 접근성** | Web Accessibility | 장애·입력 방식과 관계없이 이용 가능하도록 만드는 원칙 | label, 대체 텍스트 |

## 2. JavaScript와 사용자 동작

| 용어 | 영어·원명 | 쉬운 설명 | 예 |
|---|---|---|---|
| **JavaScript** | JS | 브라우저에서 동작을 처리하는 프로그래밍 언어 | 버튼 반응 |
| **변수** | Variable | 데이터를 참조할 이름 | `const theme = "dark"` |
| **함수** | Function | 호출할 수 있는 작업 묶음 | `renderMenu()` |
| **DOM** | Document Object Model | 브라우저가 표현하는 문서 노드·객체 구조 | `document.querySelector` |
| **이벤트** | Event | 클릭·입력처럼 발생한 사건 | `click` |
| **리스너** | Event Listener | 이벤트에 대응하도록 등록한 함수 | `addEventListener` |
| **핸들러** | Event Handler | 이벤트를 받아 처리하는 함수 | 클릭 처리 |
| **상태** | State | 현재 UI의 값·조건 | 메뉴 열림/닫힘 |
| **렌더링** | Rendering | 브라우저가 화면 내용을 그리거나 갱신하는 과정 | 글자 변경 |

**핵심 구별:** DOM은 **문서의 표현**, Event는 **발생한 사건**, State는 **현재의 값**입니다.

## 3. 외부 데이터·브라우저 저장

| 용어 | 원명 | 쉬운 설명 | B1-1 상황 |
|---|---|---|---|
| **API** | Application Programming Interface | 다른 시스템의 기능·데이터에 접근하는 규칙 | GitHub 공개 프로젝트 |
| **Fetch API** | Fetch API | 브라우저 HTTP 요청 인터페이스 | `fetch(url)` |
| **JSON** | JavaScript Object Notation | 데이터 교환에 널리 쓰이는 텍스트 형식 | 프로젝트 이름·링크 |
| **Promise** | Promise | 비동기 작업의 완료·실패 상태를 표현하는 객체 | Fetch 결과 |
| **async/await** | JS 문법 | Promise 기반 처리를 읽기 쉽게 작성 | 응답 대기 |
| **HTTP** | Hypertext Transfer Protocol | 요청·응답을 주고받는 웹 규약 | HTTP status |
| **HTTP 403** | Forbidden | 서버가 요청을 거부한 상태 코드 | 접근 제한·요청 제한 등 |
| **localStorage** | Web Storage | 동일 출처의 브라우저에 문자열 값을 저장 | 테마 선택 |
| **try/catch** | 예외 처리 구문 | 코드 예외에 대비하고 처리 | 요청 실패 메시지 |

**오해 주의:** `fetch`는 HTTP 403을 받아도 자동으로 예외를 던지지 않을 수 있습니다. `response.ok`를 확인합니다. localStorage는 서버 데이터베이스가 아닙니다.

## 4. 작업·검증 용어

| 용어 | 쉬운 설명 |
|---|---|
| **GitHub Pages** | HTML·CSS·JS 정적 사이트를 공개하는 GitHub 기능 |
| **Commit** | 소스 및 문서의 변경을 기록한 이력 |
| **SHA** | 특정 Git 객체를 식별하는 해시 |
| **PRIMM** | Predict 예측 → Run 실행 → Investigate 조사 → Modify 수정 → Make 제작 |
| **PASS / FAIL / NOT_VERIFIED** | 근거로 확인된 충족 / 확인된 불충족 / 아직 미검증 |
| **CORE / BONUS** | 필수 핵심 기능 / 선택 확장 기능(공식 판정은 01단계에서 확정) |

## 5. 암기보다 이해해 보기

1. `<main>`과 `<footer>`는 무엇이 다른가요?
2. CSS Grid와 Flexbox가 주로 적합한 배치 방향은 어떻게 다른가요?
3. 클릭 이벤트와 메뉴 열림 상태는 무엇이 다른가요?
4. 성공 요청이 빈 배열을 반환한 상황은 네트워크 오류와 같나요?
5. 브라우저에 토큰·비밀키를 저장해도 안전할까요?

**간단한 답:** ① 본문/바닥글 ② 2차원/주로 한 방향 ③ 사건/값 ④ 다름 ⑤ 안전하다고 볼 수 없음. 별도 실습·학습 숙달 평가 NOT_VERIFIED.

**참고:** [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) · [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) · [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) · [MDN DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

[학습 지도](LEARNING-MAP.md) · [핵심 원리](CORE-CONCEPTS.md) · [00단계 안내](README.md)
