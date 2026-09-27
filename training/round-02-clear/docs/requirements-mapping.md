# B1-1 Round 02 — Requirement → Implementation → Verification → Evidence → Evaluation

> 현재 Mission: **B1-1 — 나를 소개하는 웹페이지 처음부터 만들기**  
> 현재 기준: **제2기 Mission PDF 우선**  
> 과거 동일 주제 Mission ID: `B4-1`  
> 기존 평가자료: `b4-1-evaluation.md`  
> Round 01 자료는 참고만 하고 Round 02의 실제 Runtime/Evidence를 대신하지 않는다.

## 1. 기준 구분

### 공식 요구
제2기 B1-1 Mission PDF에 직접 명시된 필수 요구사항이다.

### 기존 평가
`b4-1-evaluation.md`에 있는 동일 주제 평가 항목이다. 공식 PDF와 실질적으로 일치하는 항목은 평가 준비에 재사용한다.

### 구현 선택
공식 요구를 만족시키기 위한 Round 02의 구현 방법이다. 구현 선택 자체를 공식 요구라고 표현하지 않는다.

### AI 예상 질문
향후 모의평가에서 사용할 수 있으나 공식 평가항목으로 표시하지 않는다.

---

## 2. Gate 2 연결표

| ID | Source | Requirement / Evaluation Focus | Planned Implementation | Verification | Round 02 Evidence | Evaluation Explanation |
|---|---|---|---|---|---|---|
| R01 | 공식 요구 | `index.html`, `css/`, `js/`, `images/` 역할 분리 | Round 02 site 구조에서 HTML/CSS/JS/Image 분리 | 파일 트리 + 정적 확인 | `evidence/structure.txt` | HTML=구조, CSS=표현, JS=동작으로 책임을 분리한 이유 |
| R02 | 공식 요구 + 기존 평가 | 시맨틱 태그 `header/nav/main/section/article/footer`, Hero/About/Skills/Projects/Contact/Footer | 의미에 맞는 시맨틱 마크업 | 코드 확인 + 브라우저 섹션 확인 | 구조 캡처 + HTML 발췌 | 시맨틱 태그가 문서 의미·접근성·유지보수에 주는 이점 |
| R03 | 공식 요구 + 기존 평가 | CSS 변수, 다크 테마 변수, Flexbox, Grid, 모바일 퍼스트, 768/1024px | `:root`, `[data-theme=dark]`, nav Flexbox, Projects Grid | 정적 확인 + 3개 viewport | desktop/tablet/mobile 캡처 | Flexbox와 Grid 선택 기준, 모바일 퍼스트 이유 |
| R04 | 공식 요구 + 기존 평가 | `defer`, `const/let`, `addEventListener`, DOM 선택/변경, click/submit/scroll/input, `preventDefault` | Vanilla JS 이벤트 핸들러 | 정적 확인 + 브라우저 이벤트 실행 | 이벤트별 캡처/로그 | 이벤트 → 상태 → DOM 업데이트 흐름 |
| R05 | 공식 요구 + 기존 평가 | 햄버거, smooth scroll, scroll-top, nav scroll style, dark mode, scroll animation | 각 기능을 JS 상태/렌더 함수와 연결 | 실제 브라우저 동작 | 기능별 Runtime 캡처 | 각 기능이 어떤 이벤트에서 어떤 화면 변화로 이어지는지 |
| R06 | 공식 요구 + 기존 평가 | Contact: 이름/이메일/메시지, 필수값, 이메일 형식, 근접 에러, 성공 메시지 | HTML form + JS validation | invalid/valid 두 시나리오 | form-invalid / form-valid 캡처 | 클라이언트 검증 목적과 `preventDefault()` 역할 |
| R07 | 공식 요구 | 화살표 함수, 템플릿 리터럴, 구조분해, `map` / `forEach`; `filter`는 선택 | GitHub 데이터 → 카드 변환 | 코드 리뷰 + 실제 카드 렌더 | 코드 발췌 + API 화면 | 배열 데이터를 UI로 변환하는 단계 설명 |
| R08 | 공식 요구 + 기존 평가 | GitHub API + `fetch` + `async/await` + `try/catch`, loading/success/error/empty | GitHub public repo fetch + 상태별 render | 정상/실패/빈 상태 시나리오 | api-success/error/empty 캡처 | 비동기 요청과 예외 처리 흐름 |
| R09 | 공식 요구 + 기존 평가 | 상태 → 렌더 흐름 3개 이상, 다크 모드 localStorage 유지 | theme/projects/form 상태를 명확히 관리 | toggle/reload/API/form 검증 | state-flow 기록 | 이벤트 → 상태 변경 → 렌더의 연결 설명 |
| R10 | 공식 요구 | GitHub Pages 배포, 배포 URL에서 필수 기능 정상 | GitHub Pages 배포 | 외부 URL 접속 및 전 기능 재검증 | deployment URL + 캡처 | 로컬과 배포 환경 차이 및 검증 방법 |
| R11 | 공식 요구 | README: 프로젝트 설명, 사용 기술, 배포 URL, 스크린샷 | Round 02 실제 값으로 README 보완 | 문서 검토 | README 링크/캡처 | 다른 사람이 실행·확인할 수 있는 문서화 |
| R12 | 공식 제약 | React/Vue/jQuery/Bootstrap/Tailwind 금지, 순수 HTML/CSS/JS, inline style 금지, 최신 Chrome | 외부 프레임워크 없이 구현 | 문자열/파일 정적 검사 + Chrome Runtime | verify 결과 | 프레임워크 없이 DOM·이벤트·비동기를 직접 학습하는 이유 |
| R13 | 공식 요구 | scroll-top 기준 300px, nav 기준 60px는 변경 가능하나 README 명시 | 상수화 후 README에 기준 기록 | 정적 + Runtime | verify + README | 임계값을 상수/문서로 관리하는 이유 |
| R14 | 공식 요구 | IntersectionObserver threshold 0.2 이상 권장; 변경 시 README 명시 | `threshold: 0.2` 우선 적용 | 코드 + scroll Runtime | verify + 캡처 | Observer를 사용한 이유와 threshold 의미 |
| R15 | 공식 제약 | GitHub API 무인증 호출 60회/시간 제한, 403도 error UI로 처리 | 과도한 refresh 방지 + 공통 error 상태 | 필요 시 403/실패 시나리오 | api-error 기록 | rate limit이 사용자 UI에 미치는 영향 |

---

## 3. 기존 Evaluation 재사용 범위

기존 `b4-1-evaluation.md`의 다음 항목은 현재 B1-1 공식 요구와 직접 연결되므로 평가 준비에 재사용한다.

- 반응형 레이아웃
- 다크/라이트 모드 + 새로고침 유지
- 햄버거/스크롤 애니메이션/맨 위로 가기
- GitHub API + loading/error/empty
- Contact validation
- HTML/CSS/JS 파일 분리 이유
- 시맨틱 태그
- CSS 변수
- `addEventListener` vs inline `onclick`
- 이벤트 → 상태 → 화면 업데이트
- `async/await` + `try/catch`
- 배열 메서드로 데이터 → 카드 UI 변환
- Flexbox vs Grid
- 모바일 퍼스트

## 4. 공식 요구와 기존 Evaluation의 차이

### `STATE` 객체

기존 Evaluation에는 명시적인 `STATE` 객체 사용 이유를 묻는 항목이 있다.

하지만 제2기 B1-1 공식 PDF의 핵심 필수 요구는 **특정 이름의 `STATE` 객체 자체가 아니라, 사용자 이벤트 → 상태 변경 → 화면 업데이트 흐름이 명확하고 3개 이상의 상태→렌더 흐름이 존재하는 것**이다.

Round 02에서는 설명성과 평가 재사용성을 위해 명시적인 상태 객체를 사용할 수 있으나, 이를 **공식 PDF의 강제 구현 방식**이라고 표현하지 않는다.

### `filter()`

공식 PDF에서 `map`과 `forEach`는 활용 항목이며, `filter` 기반 프로젝트 필터링은 선택/보너스 성격이 있다.

기존 Evaluation에서 `map/filter` 설명을 묻고 있으므로, 최소 구현에서는 기존 Round 01처럼 공개 저장소 정리 등에 `filter()`를 자연스럽게 사용할 수 있다. 다만 공식 필수 기능을 늘리는 방식으로 과도하게 확장하지 않는다.

---

## 5. Runtime Evidence 원칙

정적 코드 존재만으로 PASS하지 않는다.

필수 Runtime Evidence:

1. desktop / tablet / mobile viewport
2. hamburger / smooth scroll / scroll-top / nav state / observer
3. dark mode toggle + reload persistence
4. Contact invalid / valid
5. GitHub API loading + success
6. GitHub API error/retry + empty 상태
7. GitHub Pages 외부 URL
8. 배포된 URL에서 전체 필수 기능
9. 사용자의 평가 설명

---

## 6. Gate 2 판정

**Gate 2 — COMPLETE**

- 공식 요구와 기존 Evaluation을 구분함
- 재사용 가능한 기존 평가항목을 식별함
- 공식 요구가 아닌 구현 선택(`STATE`)을 분리함
- Requirement → Implementation → Verification → Evidence → Evaluation 연결 초안을 작성함

다음 단계는 **Gate 3 — Minimum Passing Path(최소 통과 경로)** 확정이다.
