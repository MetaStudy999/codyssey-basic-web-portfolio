# B1-1 Image Study Deck v3 Roadmap

> Mission: B1-1 — 나를 소개하는 웹페이지 처음부터 만들기
>
> Mode: Study-first Image Learning Deck
>
> Target: 약 40~45장
>
> Current Visual Storyboard: 01~45 생성 완료(33~45 신규 확장 포함)
>
> Current Golden Master Status: NOT YET

## 1. 목적

이 Deck은 짧은 발표만을 위한 자료가 아니다.

```text
개인 공부
→ 개념 이해
→ 실제 코드 연결
→ Runtime 확인
→ Evidence 검증
→ 재현
→ 설명
→ 평가 대응
→ 다른 문제로 전이
```

을 지원하는 **이미지형 학습 교재 + 발표자료**다.

핵심 규칙:

```text
Page Density ↓
Page Count ↑
Text ↓
Visual Memory ↑
```

## 2. Current Progress — 2026-10-06

| Range | Topic | Visual | Truth | Status |
|---|---|---:|---:|---|
| 01–04 | Story / Learning / Event-State-Render | 높음 | 개선 중 | Slide 04 Truth Preview 완료 |
| 05–08 | Requirement / Architecture / Flow | 높음 | 부분 | STORYBOARD DONE |
| 09–12 | State / Code / Function | 높음 | 개선 중 | Slide 10/11 Truth Preview 완료 |
| 13–16 | Runtime / Responsive / Projects UI | 높음 | 원본 합성 대기 | ACTUAL SCREENSHOT REQUIRED |
| 17–20 | Verify / Evidence / Troubleshooting / Security | 높음 | 개선 중 | Slide 17/18/20 Truth Preview 완료 |
| 21–24 | Framework / Layout / Deploy / Trade-off | 높음 | 부분 | DECISION CLARIFICATION REQUIRED |
| 25–28 | Reproduction / Explain | 높음 | 학습 검증 대기 | PRACTICE REQUIRED |
| 29–32 | Defense / Mastery / Context / Journey | 높음 | 부분 | MASTER CLAIM CONTROL REQUIRED |
| 33–45 | Study Note Expansion | 높음 | Source 기반 초안 | IMAGE DRAFT DONE |

## 3. Visual Storyboard 01–32

### 01–04 Story / Concept
1. HERO — B1-1 Journey
2. WHY — 문제 → 아이디어 → 가능성
3. LEARNING MAP — HTML/CSS/JS → DOM/Event/State/Render → API/Deploy/Evidence
4. EVENT → STATE → RENDER — 실제 `addEventListener()` 기준 Truth Preview 완료

### 05–08 Structure
5. REQUIREMENT MAP
6. BEGINNER VIEW
7. TECH VIEW
8. END-TO-END FLOW

### 09–12 Code Model
9. STATE MODEL
10. CODE STUDY · THEME — 실제 `setThemeMode()` / `renderTheme()` 기반 Preview 완료
11. CODE STUDY · PROJECTS — 실제 `loadProjects()` / `setProjectsState()` 기반 Preview 완료
12. FUNCTION MAP

### 13–16 Runtime
13. RUNTIME · LIGHT — 실제 Screenshot 합성 대기
14. RUNTIME · DARK — 실제 Screenshot 합성 대기
15. RESPONSIVE — 실제 Screenshot 합성 대기
16. PROJECTS UI — 실제 Screenshot 합성 대기

### 17–20 Verification
17. VERIFY — 실제 `verify.txt` 기반 Preview 완료
18. EVIDENCE MAP — 실제 Requirement/Code/Evidence 구조로 Preview 완료
19. TROUBLESHOOTING — 실제 Formspree localhost→production 사례 유지/정밀화 필요
20. FAILURE & SECURITY — 실제 B1-1 Security/Accessibility 범위로 Preview 완료

### 21–24 Decision
21. DECISION · FRAMEWORK
22. DECISION · LAYOUT
23. DECISION · DEPLOY
24. TRADE-OFF

### 25–28 Reproduction
25. REPRODUCTION · L1
26. REPRODUCTION · L2·L3
27. REPRODUCTION · L4·L5
28. SPEAK & EXPLAIN

### 29–32 Mastery / Context
29. DEFENSE Q&A
30. MISSION → MASTERY
31. MEMORY / CONTEXT FIX
32. NEXT JOURNEY

## 4. Truth Replacement Priority

다음 슬라이드는 새 디자인보다 실제 Source 치환이 우선이다.

```text
P0 DONE PREVIEW: 04, 10, 11, 17, 18, 20
P0 PENDING     : 13, 14, 15, 16
P1             : 07, 08, 09, 12, 21, 23, 24, 30
P2             : 나머지 Visual polish
```

### 대표 수정 상태

- Slide 04: `onClick()` 표현 제거 → 실제 `addEventListener()` 기반 Preview 완료
- Slide 10: React/useState 형태 제거 → 실제 Vanilla JS Theme Code Preview 완료
- Slide 11: 가상 `/api/projects` 제거 → 실제 GitHub REST API 흐름 Preview 완료
- Slide 13~16: 생성 UI를 `RUNTIME`으로 사용 금지 → 실제 Screenshot 픽셀 합성 필요
- Slide 17: 실제 `verify.txt` 결과 반영 Preview 완료
- Slide 18: 실제 R03/R08/R09 Traceability 예시 반영 Preview 완료
- Slide 20: generic Authentication/Encryption 중심 표현 제거 → 실제 Secret / DOM-XSS 경계 / Validation / aria / reduced-motion / API error-retry 반영 Preview 완료
- Slide 23: GitHub Pages = 실제 Delivery, Vercel/Netlify = Alternative 비교로 분리 필요
- Slide 30: `100% MASTER` 금지 → Repository PASS와 L1~L5 Human Mastery 분리 필요

## 5. Study Note Expansion 33–45 — Visual Draft Done

33. GLOSSARY — DOM / Event / State / Render
34. SEMANTIC HTML — 구조를 의미로 읽기
35. CSS MOBILE FIRST — 375 → 768 → 1024+
36. EVENT MODEL — 실제 `addEventListener()` 흐름
37. GITHUB API — loading → fetch → JSON → filter → result
38. FORMSPREE — Validate → POST → Sending → Result + 실제 Runtime Evidence 문구
39. ASYNC STATES — loading / success / empty / error / retry
40. ACCESSIBILITY — Semantic / label / aria / reduced-motion
41. ACTUAL CODE TRACE — 실제 Theme / Projects Code 기반
42. ACTUAL EVIDENCE SOURCES — 실제 Screenshot 파일명 + verify/Formspree Source, 픽셀 합성은 PENDING
43. QUICK REVIEW — Keyword → Flow → Code → Evidence → Limitation
44. ORAL REVIEW — 10초 / 30초 / 1분 설명
45. GOLDEN MASTER GATE — 현재 PASS/PENDING 상태를 분리하고 `FINAL = NOT YET`

## 6. Generated Artifact Status

현재 생성한 이미지형 진행 산출물:

```text
Study Expansion 33–45
= 13 image slides
= image-only PowerPoint container 생성

Truth Replacement Preview
= Slides 04 / 10 / 11 / 17 / 18 / 20
= 6 image slides
= image-only PowerPoint container 생성
```

Repository에는 Binary PPT/Image 자체가 아니라 **Canonical Rule / Roadmap / Truth Map**을 우선 기록한다.
Binary 최종본은 Truth Replacement 완료 후 버전 고정하여 별도 Artifact/Release 대상으로 관리한다.

## 7. Image Slide Production Rule

```text
1 Slide = 1 Finished Image Composition
PowerPoint = Image Slides를 순서대로 담는 Container
```

제작 과정:

```text
Repository Truth Lock
→ Storyboard
→ Visual Background / Comic
→ Actual Text / Code / Screenshot Composite
→ Full-screen QA
→ Export Image
→ PPT/PDF Container
```

## 8. Badge Rule

- AI-VISUAL — 생성 시각자료
- EXPLAIN — 단순화된 설명
- CODE — 실제 코드
- RUNTIME — 실제 실행
- EVIDENCE — 실제 검증
- OFFICIAL — 공식 요구
- DECISION — 설계 선택
- MASTER — 숙달 실제 검증 후에만

## 9. Next Execution Queue

1. **Actual Screenshot 확보/합성** — Slides 13~16 및 42
2. **Decision Truth Fix** — Slides 21/23/24
3. **Mission vs Mastery Fix** — Slide 30
4. **P1 Architecture/Function 정밀화** — Slides 07/08/09/12
5. **Full-screen QA** — 45장 전체
6. **Accessibility QA** — 색 대비 / 작은 글자 / 의미 전달
7. **Golden Master Gate** — G1~G10 재판정

## 10. Completion Gate

Visual 45장을 만들었다는 사실만으로 완료하지 않는다.

최종 Gate:

1. Visual Impact
2. Technical Accuracy
3. Evidence Integrity
4. Traceability
5. Learning Value
6. Reproduction
7. Explanation
8. Evaluation Defense
9. Full-screen Readability
10. Accessibility

현재 단계:

```text
VISUAL STORYBOARD 01–32 = DONE
STUDY EXPANSION 33–45    = IMAGE DRAFT DONE
TRUTH PREVIEW 6 SLIDES   = DONE
ACTUAL SCREENSHOT COMPOSITE = PENDING
FULL TRUTH REPLACEMENT   = IN PROGRESS
GOLDEN MASTER FINAL      = NOT YET
```
