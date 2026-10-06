# B1-1 Truth Replacement Map

> 목적: 이미지형 Storyboard의 시각 품질을 유지하면서 실제 Repository Truth로 교체한다.

## 1. Truth Sources

### Actual Code

```text
index.html
css/style.css
js/script.js
```

### Actual Verification

```text
training/round-02-clear/docs/requirements-mapping.md
training/round-02-clear/docs/final-verification.md
training/round-02-clear/evidence/verify.txt
training/round-02-clear/evidence/structure.txt
training/round-02-clear/evidence/formspree-runtime-pass.txt
```

### Actual Runtime Screenshots

```text
training/round-02-clear/evidence/b1-1-final-desktop-light.png
training/round-02-clear/evidence/b1-1-final-desktop-dark.png
training/round-02-clear/evidence/b1-1-final-mobile-375.png
training/round-02-clear/evidence/b1-1-final-projects-filter.png
training/round-02-clear/evidence/b1-1-final-system-theme-sync.png
```

Screenshot baseline commit:

```text
d979e19
```

Presentation / implementation baseline referenced by v2:

```text
8e88fb41f7f0ad5725a5a0b5bc756f1329b8ab8d
```

`main @ 8e88...`라고 표시하지 않고 `Evidence / Implementation Baseline`으로 표시한다.

## 2. Slide Corrections

| Slide | Current Risk | Required Truth Replacement | Final Badge |
|---|---|---|---|
| 04 | AI `onClick()` 표현 | 실제 `addEventListener()` 기반 Event Handler 개념 | EXPLAIN + CODE reference |
| 07 | 대안/실제 경계 혼동 가능 | Presentation → Application → Integration → Delivery, 실제 B1-1 시스템과 정합 | EXPLAIN |
| 08 | 추상 Flow | Event → State → Async/Logic → Render → DOM, GitHub API 실제 흐름 연결 | EXPLAIN |
| 10 | React/useState 형태 위험 | `getSavedThemeMode`, `resolveTheme`, `setThemeMode`, `renderTheme` 실제 코드 | CODE |
| 11 | 가상 endpoint 위험 | GitHub REST API URL + `loadProjects`, `setProjectsState`, `renderProjects` | CODE |
| 12 | Function 책임 단순화 | Theme / Projects / Form / Navigation / Scroll 실제 Function Map | CODE |
| 13 | 생성 Runtime | 실제 desktop-light screenshot | RUNTIME |
| 14 | 생성 Runtime | 실제 desktop-dark screenshot | RUNTIME |
| 15 | 생성 Responsive | 실제 desktop + mobile + 필요 시 tablet evidence | RUNTIME |
| 16 | 생성 Projects UI | 실제 projects-filter screenshot | RUNTIME |
| 17 | generic verify UI | 실제 R01~R15 + verify.txt / final-verification | EVIDENCE |
| 18 | 생성 Evidence 예시 | 실제 Requirement → Code → Runtime → Evidence 1~3개 대표 연결 | EVIDENCE |
| 19 | generic error 예시 | 실제 Formspree localhost domain failure → production re-verify 사례 | EVIDENCE |
| 20 | generic auth/encryption | Secret 없음, DOM/XSS 경계, validation, aria, reduced-motion, API error/retry | EXPLAIN / EVIDENCE |
| 21 | Framework 비교 | Vanilla JS = 실제 선택, React/Next = 대안. 공식 제약과 학습 목표 표시 | DECISION |
| 23 | Delivery 혼동 | GitHub Pages = actual, Vercel/Netlify = alternative | DECISION |
| 30 | Mastery 과대표현 | Repository PASS와 Human L1~L5 별도 표시 | MASTER only after review |

## 3. Actual Event / State / Render Truth

B1-1 실제 중심 흐름:

```text
User / Browser Event
→ addEventListener(...)
→ handler
→ state update
→ render function
→ DOM update
```

대표 실제 영역:

### Theme

```text
handleThemeCycleClick
→ setThemeMode
→ state.themeMode / state.theme
→ localStorage
→ renderTheme
```

### Projects

```text
loadProjects
→ setProjectsState(loading)
→ fetch(GitHub REST API)
→ response.json
→ filter(non-fork)
→ setProjectsState(success / empty / error)
→ renderProjects
```

### Form

```text
input / submit event
→ validation
→ form state / request
→ result UI
```

## 4. B1-1 Security / Accessibility Truth

실제 범위 중심으로 표현한다.

- Browser/Repository에 API Key 저장하지 않음
- 외부/사용자 데이터가 DOM에 들어오는 경로 인지
- inline event handler 대신 `addEventListener`
- 입력 Validation
- Semantic HTML / label / aria
- `prefers-reduced-motion`
- GitHub API rate limit / network error → error state + retry
- Contact Form 개인정보 최소 입력 / 외부 전송 경계

B1-1에 실제로 없는 Authentication / Encryption / Backend access control을 핵심 구현처럼 표현하지 않는다.

## 5. Truth Replacement Gate

각 슬라이드 완료 조건:

```text
[ ] Source identified
[ ] Actual content extracted
[ ] AI-generated conflicting content removed
[ ] Badge corrected
[ ] Full-screen readable
[ ] Claim matches Evidence
[ ] No invented code / number / PASS
```

모든 P0 Slide가 완료되기 전에는 `Golden Master FINAL`로 표시하지 않는다.
