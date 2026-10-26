# B1-1 — 주요 코드 학습 로드맵과 PRIMM 과제

> **EDUCATIONAL_EXAMPLE / NOT_IMPLEMENTED / NOT_EXECUTED / NOT_VERIFIED.** 아래 코드 조각은 문법과 원리를 이해하기 위한 교육용 예시일 뿐 **Round 04 실제 미션 신규 소스가 아닙니다**. `04-src/`의 신규 코드 작성, 실행·테스트·배포, 학습자 숙달 평가를 수행하지 않았습니다.

## 현재 문서 목차

- [1. 핵심 코드 학습 목록](#topics)
- [2. 예시 A — DOM과 이벤트](#event)
- [3. 예시 B — 상태·테마 저장](#theme)
- [4. 예시 C — GitHub 공개 API](#api)
- [5. PRIMM 연습과 가상 오류 해결](#practice)
- [6. 학습 목표·평가 연결](#trace)

<a name="topics"></a>

## 1. 주요 코드와 역할

| 순서 | 키워드·API | 꼭 알아야 할 개념 | 향후 실제 검증 |
|---|---|---|---|
| C01 | `<header>`, `<main>`, `<nav>` | 시맨틱 HTML 구조 | 문서 의미·접근성 |
| C02 | `display:flex`, `display:grid` | 레이아웃·정렬 | 모바일·데스크톱 화면 |
| C03 | `@media` | 화면 폭 조건별 배치 | 반응형 검증 |
| C04 | `document.querySelector` | DOM 요소 선택 | 요소 존재 확인 |
| C05 | `addEventListener` | 사용자 이벤트 | 버튼 클릭 동작 |
| C06 | `classList.toggle` | UI 상태 변경 | 메뉴·테마 변화 |
| C07 | `localStorage` | 브라우저 설정 저장 | 새로고침 후 복원 |
| C08 | `fetch`, `async/await` | 외부 데이터 비동기 처리 | 성공·오류·로딩 |
| C09 | `response.ok`, `try/catch` | HTTP 상태와 예외 구분 | 403·연결 실패 |
| C10 | `textContent` | 사용자에게 텍스트 표시 | 안전한 내용 갱신 |

**공식 요구 ID:** 01단계 PDF·평가 15문항 분석 후 확정. 현재의 C01~C10은 학습용 임시 코드 ID입니다.

<a name="event"></a>

## 2. 예시 A — HTML 버튼과 JavaScript 이벤트

```html
<button id="hello-button" type="button">인사하기</button>
<p id="message">아직 인사하지 않았습니다.</p>
```

```javascript
const button = document.querySelector("#hello-button");
const message = document.querySelector("#message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "안녕하세요!";
  });
}
```

**코드 읽기**
1. `querySelector`는 해당 선택자와 일치하는 첫 번째 요소를 찾고 없으면 null을 반환합니다.
2. `button && message`는 두 요소를 찾은 경우에만 리스너를 등록하도록 합니다.
3. `addEventListener("click", ...)`는 클릭 사건이 일어나면 뒤의 함수를 호출합니다.
4. `textContent`는 해당 문단의 텍스트를 변경합니다.

**예측(Predict):** 클릭 전에는 ‘아직 인사하지 않았습니다.’, 클릭 후에는 ‘안녕하세요!’로 바뀔 것으로 예상합니다. **실제 실행 결과가 아닙니다.** HTML 요소가 준비된 후 JS가 실행되는 조건도 필요합니다.

<a name="theme"></a>

## 3. 예시 B — 테마 상태·CSS 클래스·로컬 저장소

```javascript
const theme = "dark";
document.documentElement.classList.toggle("dark", theme === "dark");

try {
  localStorage.setItem("theme", theme);
} catch (error) {
  // 저장소 접근이 허용되지 않는 경우 후속 동작을 설계해야 합니다.
}
```

**읽기 포인트:** `theme`는 선택 상태, `classList.toggle`은 DOM의 클래스 변경, `localStorage.setItem`은 현재 브라우저의 문자열 저장입니다. 이는 CSS 다크 테마 정의·버튼 이벤트·초기 상태 복원이 없는 **부분 예시**입니다.

**오류 질문:** 사용자의 설정으로 localStorage 접근이 제한된 경우 어떻게 될까요? → 예외가 발생할 수 있으므로 저장 실패와 UI 기본 동작을 분리해 고려합니다.

<a name="api"></a>

## 4. 예시 C — GitHub 공개 API의 로딩·성공·빈 결과·실패

아래의 `octocat`은 교육용 공개 계정 예시로서 사용자 계정이나 실제 프로젝트 결과가 아닙니다.

```html
<p id="load-status">요청 전</p>
```

```javascript
async function loadExampleProjects() {
  const status = document.querySelector("#load-status");
  if (!status) return;

  status.textContent = "불러오는 중...";
  try {
    const response = await fetch(
      "https://api.github.com/users/octocat/repos?per_page=3"
    );
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    const repos = await response.json();
    status.textContent = Array.isArray(repos) && repos.length > 0
      ? String(repos.length) + "개 항목을 받았습니다."
      : "항목이 없습니다.";
  } catch (error) {
    status.textContent = "불러오지 못했습니다.";
    console.error(error);
  }
}
// 이 문서에서는 함수를 호출하거나 요청을 실행하지 않았습니다.
```

**함수 흐름**
1. 존재하는 DOM 상태 영역을 찾습니다.
2. 요청 전 **로딩** 문구를 보여줍니다.
3. `fetch`로 공개 API 요청 후 HTTP 응답을 받습니다.
4. `response.ok`가 거짓이면 HTTP 상태를 반영한 오류로 처리합니다.
5. JSON 응답에 항목이 있다면 개수를 표시하고, 없으면 빈 결과를 안내합니다.
6. 네트워크·파싱 예외는 `catch`에서 오류 상태로 바꿉니다.

**주의:** HTTP 403 응답은 `fetch`가 자동으로 실패한 Promise로 바꾸지 않을 수 있습니다. `response.ok` 검사와 네트워크 예외 처리는 서로 다른 단계입니다. 실제 프로젝트의 재시도 버튼·접근성·보안 처리는 03~05단계에서 설계·검증해야 합니다.

<a name="practice"></a>

## 5. PRIMM 기반 과제 (학습 설계, 수행 전)

| 단계 | 학습자 수행 | 평가 근거(실행 이후) |
|---|---|---|
| **P — Predict** | 클릭 전후 문단 글자 변화 예상 | 실행 전 답안 |
| **R — Run** | 별도 승인된 환경에서 예제 실행 | 실제 결과 캡처·로그 |
| **I — Investigate** | 요소 선택→이벤트→DOM 변경 순서 추적 | 코드 설명 |
| **M — Modify** | 문구·클래스 값을 바꾸어 동작 비교 | 변경 전/후 출력 |
| **M — Make** | 예제 없이 새 버튼의 핵심 동작 작성 | 독립 구현과 테스트 |

**가상 Debugging 예시:** `querySelector("#hello-button")`가 null이라면 HTML에 해당 ID가 있는지, 코드 실행 시점에 DOM이 만들어졌는지, 선택자에 오타가 있는지 확인합니다. **새 미션 코드에서 실제로 재현한 오류라고 주장하지 않습니다.**

**AI 도움 단계:** H1 질문만 → H2 개념 → H3 해결 절차 → H4 해설. 독립 숙달 평가는 사용한 힌트 수와 범위를 별도로 기록합니다.

<a name="trace"></a>

## 6. 학습목표 ↔ 주요 코드 ↔ 평가 매핑 초안

| 학습 목표 | 학습 코드 | 미니 실습 | 공식 평가 ID | 현재 판정 |
|---|---|---|---|---|
| 사건과 상태 변화를 구분한다 | C04~C06 | 버튼 클릭 후 문구 변경 | 01단계 확인 대기 | NOT_VERIFIED |
| 브라우저 설정 저장을 설명한다 | C06~C07 | 저장·복원·예외 생각하기 | 01단계 확인 대기 | NOT_VERIFIED |
| API 요청의 결과를 구별한다 | C08~C09 | 로딩·빈 목록·403 분기 | 01단계 확인 대기 | NOT_VERIFIED |
| 설명 없이 직접 구현한다 | C04~C10 | 백지 구현·오류 해결 | 07단계 L4~L5 검증 | NOT_VERIFIED |

**계획 이후 필수 확인:** 04단계 승인된 신규 코드 경로, 커밋 SHA, 실제 실행 환경, 예상·실제 동작, 실패·수정·재시험 기록을 연계합니다. 00단계 예시만으로 기능 PASS나 학습자 MASTER를 선언하지 않습니다.

[학습지도](LEARNING-MAP.md) · [용어](TECHNICAL-GLOSSARY.md) · [핵심 개념](CORE-CONCEPTS.md) · [아키텍처](ARCHITECTURE-INTRO.md) · [README](README.md)
