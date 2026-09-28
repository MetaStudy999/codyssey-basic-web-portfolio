# B1-1 Troubleshooting

> 목적: Round 02에서 실제로 발생한 오류를 **증상 → 확인 → 원인 → 최소 수정 → 재검증 → 배운 점** 순서로 기록한다.
>
> 원칙: 예상 오류가 아니라 실제 Runtime에서 확인한 문제와 해결 과정을 기록한다.

---

## TS-01. 페이지 최초 진입 시 Projects 위치로 이동

### 증상

Portfolio를 처음 열었을 때 Home/Hero가 아니라 Projects 부근으로 스크롤되는 현상이 발생했다.

### 확인

- 초기화 코드에는 Projects로 직접 이동시키는 `scrollIntoView()` 호출이 없었다.
- `scrollIntoView()`는 Navigation 링크를 사용자가 클릭했을 때만 실행됐다.

### 원인

브라우저의 이전 스크롤 위치 복원(Scroll Restoration)이 최초 진입처럼 보이는 상황에서도 적용될 수 있었다.

### 수정

- 일반 최초 진입에서는 상단으로 이동
- URL Hash가 있으면 해당 위치 이동을 유지
- 뒤로가기(Back/Forward) 복귀에서는 이전 스크롤 위치를 보존

### 검증

Home URL을 새 탭에서 열었을 때 Hero부터 시작하는 것을 확인했다.

---

## TS-02. Contact 마지막 섹션이 Security와 겹쳐 보임

### 증상

마지막 Contact Section으로 이동했을 때 위쪽 Security 내용이 화면에 남고, Contact가 Sticky Header 아래까지 충분히 올라오지 못했다.

### 원인

문서 마지막 Section이라 아래쪽에 더 스크롤할 공간이 부족했다.

### 수정

- Contact에 최소 높이 확보
- 페이지 최하단에서는 Scroll Spy가 Contact를 활성 Section으로 판단하도록 보정

### 검증

Contact가 독립 Section처럼 보이고 Navigation에서도 Contact가 활성화되는 것을 확인했다.

---

## TS-03. Formspree가 localhost 제출을 거부

### 증상

Local 테스트에서 Formspree Submission 상태에 다음 오류가 표시됐다.

```text
허용되지 않은 도메인:
localhost:8000이 metastudy999.github.io와 일치하지 않습니다.
```

### 확인

Formspree Form의 허용 Domain은 `metastudy999.github.io`로 제한되어 있었다.

### 원인

운영 Domain 제한이 활성화된 상태에서 `http://localhost:8000`에서 제출했기 때문에 Referrer/Domain 검증에 실패했다.

### 해결

운영 Domain 제한은 유지하고 실제 GitHub Pages에서 최종 전송 테스트를 수행했다.

```text
https://metastudy999.github.io/codyssey-basic-web-portfolio/
```

### 추가 수정

- 표준 HTML Form 계약인 `action` + `method="POST"` 적용
- Vanilla JavaScript `fetch()` AJAX 전송 유지
- `name`, `email`, `message`, `subject`, `_gotcha` 필드 구성
- Formspree JSON Error 응답 처리
- `aria-invalid` 접근성 상태 추가

### 검증

- Formspree Submission 생성 확인
- Notification Email 실제 수신 확인
- Subject의 `{{ name }}` 치환 확인

**결과: PASS**

---

## TS-04. System Theme이 macOS Light/Dark 변경을 따라가지 않음

### 증상

Portfolio Theme 버튼을 `System`으로 설정했지만 macOS를 Light로 변경해도 웹이 Dark 상태에 머무르는 현상이 있었다.

### 1차 확인 — Repository 최신 상태

```bash
cd "$HOME/projects/codyssey-basic-web-portfolio"

git pull --ff-only origin main
git log -1 --oneline

grep -n "syncSystemTheme" js/script.js
grep -n "handleSystemThemeChange" js/script.js
```

최신 코드와 System Theme 동기화 함수가 로컬에 존재함을 확인했다.

### 2차 확인 — 웹 코드

Theme 동작은 다음 우선순위로 구현했다.

```text
System
→ window.matchMedia("(prefers-color-scheme: dark)")
→ macOS / Browser가 보고하는 현재 시스템 Theme 적용

Light
→ 웹을 Light로 고정

Dark
→ 웹을 Dark로 고정
```

추가로 브라우저가 Theme Change Event를 놓치는 경우를 대비해 다음 시점에도 재동기화한다.

- `matchMedia().change`
- Window Focus
- `visibilitychange`
- `pageshow`
- 주기적 System Theme 확인

### 실제 원인

macOS는 Light로 설정했지만 Chrome 자체 Appearance가 시스템 설정을 따르는 상태가 아니었다.

즉, 웹의 `prefers-color-scheme`은 macOS 설정을 직접 읽는 것이 아니라 **브라우저가 노출하는 색상 선호도**를 읽기 때문에 Chrome도 시스템 테마를 따라가도록 설정되어야 했다.

### 해결

Chrome에서 Appearance를 **기기(Device)** 로 설정했다.

```text
Chrome
→ 맞춤설정
→ 모양(Appearance)
→ 기기(Device)
```

Portfolio에서는 Theme 버튼을 `System`으로 둔다.

### 최종 검증

```text
Chrome = 기기(Device)
Portfolio = System

macOS Light
→ Web Light

macOS Dark
→ Web Dark
```

사용자가 실제 브라우저에서 정상 동작을 확인했다.

**결과: PASS**

### 핵심 학습

`prefers-color-scheme`은 운영체제 값을 직접 읽는 API가 아니다.

```text
Operating System Theme
        ↓
Browser Theme / Preference
        ↓
prefers-color-scheme
        ↓
Web Application Theme
```

따라서 System Theme 문제는 다음 순서로 분리해서 점검한다.

1. Web App Theme Mode가 `System`인가?
2. `localStorage`에 Light/Dark 고정값이 남아 있지 않은가?
3. `matchMedia("(prefers-color-scheme: dark)")` 값은 무엇인가?
4. Browser Appearance가 시스템/기기 설정을 따르는가?
5. DevTools에서 `prefers-color-scheme` Emulation을 강제하고 있지 않은가?
6. 최신 JavaScript가 실제 브라우저에 로드됐는가?

---

## Troubleshooting 공통 원칙

```text
오류 확인
→ 실행 위치 확인
→ 환경 확인
→ 원인 후보 분리
→ 확인 명령
→ 최소 수정
→ 재실행
→ Runtime 검증
→ 원인 설명
```

재설치나 대규모 수정부터 하지 않고, 먼저 **Browser / OS / Local Storage / Source Version / External Service** 경계를 나눠 원인을 찾는다.
