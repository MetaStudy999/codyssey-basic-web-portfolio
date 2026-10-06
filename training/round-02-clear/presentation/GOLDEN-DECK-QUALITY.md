# B1-1 Golden Deck Quality Record

> Mission: B1-1 — 나를 소개하는 웹페이지 처음부터 만들기
>
> 목적: 발표자료의 디자인·기술 정확성·Evidence 신뢰성이 반복 제작 과정에서 어떻게 개선되는지 기록한다.

## 1. 현재 단계

- Model: **Image-First Precision Composite**
- Status: **TESTING**
- Control Standard: `MetaStudy999/codyssey-basic/standards/ROUND-02-PRESENTATION-STANDARD.md`
- Next cross-mission validation: **B1-2**

## 2. B1-1에서 확인한 장점

- PhotoReal / Cinematic Hero의 시각 임팩트가 PPT-native 조립보다 높음
- Comic을 Problem / Concept에 배치하면 학습 이해도가 좋아짐
- Technical Diagram / Data Flow / Decision 화면과 혼합했을 때 전문성 유지 가능
- 전체 Journey를 B1 → B7 성장 서사로 연결하기 좋음

## 3. B1-1에서 확인한 위험

### AI Text / Code Accuracy
생성 이미지 내부의 작은 한글·영문·Code는 오탈자·변형 가능성이 있다.

### Evidence Confusion
AI가 그린 Desktop/Mobile/Terminal/검증표가 실제 Runtime처럼 보일 수 있다.

### Thumbnail Bias
여러 장을 한 화면에 볼 때는 좋아 보여도, 실제 발표 전체 화면에서 작은 글자 가독성은 별도 검증이 필요하다.

## 4. Truth Replacement 대상

최종 Golden Deck에서는 다음을 실제 Source로 교체한다.

- Desktop Light: `evidence/b1-1-final-desktop-light.png`
- Desktop Dark: `evidence/b1-1-final-desktop-dark.png`
- Mobile 375: `evidence/b1-1-final-mobile-375.png`
- Projects Filter: `evidence/b1-1-final-projects-filter.png`
- System Theme Sync: `evidence/b1-1-final-system-theme-sync.png`
- Verification: `evidence/verify.txt`
- Structure: `evidence/structure.txt`
- Formspree Runtime: `evidence/formspree-runtime-pass.txt`
- Actual Code: `index.html`, `css/style.css`, `js/script.js`
- Requirement / PASS: `docs/requirements-mapping.md`, `docs/final-verification.md`

## 5. Provenance Badge

| Badge | 의미 |
|---|---|
| AI-VISUAL | 생성 이미지 / 개념 설명 |
| MOCKUP | 실제 결과처럼 보일 수 있는 시안 |
| CODE | 실제 Repository Code |
| RUNTIME | 실제 실행 화면 |
| EVIDENCE | 실제 검증 근거 |
| OFFICIAL | 공식 Mission / Evaluation |

## 6. Final Gate

- [ ] AI Mockup에 REAL EVIDENCE 표시 없음
- [ ] Code가 실제 Repository와 일치
- [ ] 실제 Runtime Screenshot으로 교체
- [ ] R01~R15 문구가 Source와 일치
- [ ] URL / SHA / 수치가 Source와 일치
- [ ] Full-screen 가독성 검토
- [ ] Evidence Path 역추적 가능
- [ ] Secret / 개인정보 노출 없음

## 7. 현재 판정

**Visual Direction: PASS**

**Truth Replacement: REQUIRED**

**Golden Deck FINAL: NOT YET**

B1-1에서 Truth Replacement와 Full-screen QA를 완료하고, B1-2에서 동일 Workflow를 재검증한 뒤 공통 Presentation Standard의 Stable 승격을 판단한다.


## 8. Latest Truth Review — 2026-10-06

### Verdict

| Dimension | Result |
|---|---|
| Visual Quality | **PASS** |
| Technical Accuracy | **PARTIAL** |
| Evidence Integrity | **FAIL** |
| Golden Deck FINAL | **NOT YET** |

### Required Corrections

- [ ] OFFICIAL 제목: `B1-1 — 나를 소개하는 웹페이지 처음부터 만들기`
- [ ] 마케팅용 부제와 공식 제목을 분리 표시
- [ ] AI 생성 Code 제거
- [ ] 실제 `js/script.js`에서 `loadProjects()`, `setProjectsState()`, `renderProjects()` 발췌
- [ ] 실제 Evidence Screenshot 5장으로 Runtime/Evidence 영역 교체
- [ ] 실제 `docs/requirements-mapping.md`의 R01~R15 사용
- [ ] 실제 `evidence/verify.txt` 렌더링
- [ ] URL / Screenshot Commit `d979e19` / 기준 SHA 재확인
- [ ] 근거 없는 날짜 표현 제거
- [ ] Architecture를 실제 GitHub REST API / Formspree / GitHub Pages와 `theme/projects/form` State에 맞춤
- [ ] Vanilla JS vs React를 B1-1 공식 제약 및 학습 목적 중심으로 수정
- [ ] Full-screen 16:9 가독성 검토
- [ ] AI-VISUAL / MOCKUP / CODE / RUNTIME / EVIDENCE / OFFICIAL Badge 최종 확인

### Final Truth Sources

```text
README.md
index.html
css/style.css
js/script.js
training/round-02-clear/docs/requirements-mapping.md
training/round-02-clear/docs/final-verification.md
training/round-02-clear/evidence/structure.txt
training/round-02-clear/evidence/verify.txt
training/round-02-clear/evidence/formspree-runtime-pass.txt
training/round-02-clear/evidence/b1-1-final-desktop-light.png
training/round-02-clear/evidence/b1-1-final-desktop-dark.png
training/round-02-clear/evidence/b1-1-final-mobile-375.png
training/round-02-clear/evidence/b1-1-final-projects-filter.png
training/round-02-clear/evidence/b1-1-final-system-theme-sync.png
```

### Working Rule

**현재 Art Direction은 유지한다.**
다음 Revision은 새 스타일 탐색이 아니라 실제 Source로 치환하는 Precision Composite 작업이다.

## 9. Golden Master v3 — B1-1 강화 기준

B1-1은 이후 B1-2 ~ B7-2 발표·학습 자료의 기준작(Golden Reference Deck) 역할을 한다.

기존 Art Direction은 유지하되, 최종 목표를 단순한 고품질 PPT가 아니라 **Truth-First Learning System**으로 확장한다.

### 9.1 B1-1 v3 Core Pipeline

```text
Repository Truth Lock
→ Mission / Problem
→ Easy Concept
→ 4-Panel Comic
→ Technical Mental Model
→ Architecture
→ Data / Event / State Flow
→ Actual Code
→ Runtime
→ Verification
→ Evidence
→ Design Decision / Trade-off
→ Troubleshooting
→ Reproduction
→ Explain
→ Evaluate
→ Mastery
→ Transfer
```

### 9.2 B1-1 Concept Learning Chain

핵심 개념은 가능하면 다음 4단 연결로 설계한다.

```text
Comic
→ Diagram
→ Code
→ Evidence
```

예: `Event → Handler → State → Render`

1. **Comic** — 사용자가 클릭하고 UI가 변하는 장면으로 Mental Model 형성
2. **Diagram** — Event Listener → State Update → Render 흐름
3. **Code** — 실제 `js/script.js` 함수와 연결
4. **Evidence** — 실제 Browser Runtime으로 결과 확인

AI 생성 만화는 학습용 `AI-VISUAL`이며 Evidence가 아니다.

### 9.3 B1-1 Architecture 3-Level 설명

#### Level 1 — Beginner View

```text
사용자
→ Portfolio Website
→ GitHub API / Formspree
→ Browser Result
```

#### Level 2 — Technical View

```text
Presentation
→ Application
→ Integration
→ Delivery
```

#### Level 3 — Code Trace View

```text
Event
→ Handler
→ theme/projects/form State
→ Render Function
→ GitHub REST API / Formspree
→ DOM
```

세 레벨은 같은 시스템을 다른 난이도로 설명해야 하며 서로 모순되면 안 된다.

### 9.4 Design Decision 강화

B1-1의 주요 선택은 다음 형식으로 설명한다.

```text
WHAT
→ WHY
→ HOW
→ VERIFY
→ LIMITATION
→ ALTERNATIVE
→ TRADE-OFF
```

대표 대상:

- Vanilla JavaScript vs Framework
- Flexbox vs CSS Grid
- Mobile First
- State → Render 분리
- GitHub REST API 연동
- Formspree 사용
- GitHub Pages 배포

### 9.5 Claim–Evidence Pair

Evidence는 장식이 아니라 Claim의 증명이다.

| Claim | Expected Truth Source |
|---|---|
| Responsive | 실제 Desktop / Mobile Screenshot |
| Theme | 실제 Light / Dark / System Sync Runtime |
| GitHub API | 실제 Project Filter / API 결과 |
| Form | 실제 Validation / Formspree Runtime |
| Requirements | 실제 R01~R15 Mapping |
| Verification | 실제 `verify.txt`, `structure.txt` |
| Deployment | 실제 GitHub Pages URL / Runtime |

```text
Claim
↕
Requirement
↕
Code
↕
Verification
↕
Evidence
```

### 9.6 Reproduction Gate

Mission PASS와 Learning Mastery를 분리한다.

```text
L1  실제 Code를 보며 설명
L2  Diagram만 보고 설명
L3  자료 없이 자신의 말로 설명
L4  빈 프로젝트에서 핵심 기능 재현
L5  새로운 문제에 같은 원리 적용
```

B1-1 기능이 모두 PASS여도 위 능력이 확인되지 않으면 Human Mastery를 자동으로 MASTER로 올리지 않는다.

### 9.7 Evaluation Defense

질문은 난이도별로 준비한다.

- **A — Fact:** 무엇을 구현했는가?
- **B — Principle:** 왜 그렇게 동작하는가?
- **C — Decision:** 왜 이 기술을 선택했는가?
- **D — Challenge:** 현재 한계와 반론은 무엇인가?
- **E — Extension:** Production 또는 다른 Mission으로 어떻게 확장할 것인가?

### 9.8 B1-1 3-Layer Deliverable

#### Main Presentation
- 목표: 실제 발표
- 권장: 14~16장
- 핵심 Story / Architecture / Code / Runtime / Evidence / Learning

#### Technical Appendix
- 목표: 심층 질문 대응
- 권장: 15~25장
- Glossary / Code Map / Function IPO / Error / Security / NFR / Test / Trade-off / Q&A

#### Quick Review Sheet
- 목표: 발표 직전 복습
- 1장
- Mission / 핵심 용어 / Architecture / Flow / Code / Evidence / 질문 / 한계

### 9.9 Hybrid Editable Composite

Image-First를 유지하되 최종 PPT는 가능하면 다음 Layer를 분리한다.

```text
Background Art
+
Editable Typography
+
Editable Diagram
+
Actual Code
+
Actual Evidence
+
Accessibility Text
```

### 9.10 B1-1 Golden Master Final Gate

다음 10개가 모두 PASS해야 `GOLDEN MASTER`로 판정한다.

| Gate | 기준 |
|---|---|
| G1 | Visual Impact |
| G2 | Technical Accuracy |
| G3 | Evidence Integrity |
| G4 | Traceability |
| G5 | Learning Value |
| G6 | Reproduction |
| G7 | Explanation |
| G8 | Evaluation Defense |
| G9 | Full-screen Readability |
| G10 | Accessibility |

하나라도 FAIL 또는 INSUFFICIENT_EVIDENCE이면 `FINAL` / `GOLDEN MASTER`로 승격하지 않는다.

### 9.11 Current Decision

```text
Art Direction         = KEEP
Truth Replacement     = REQUIRED
Golden Master v3      = TESTING
B1-1 Final Gate       = NOT YET
Cross-Mission Promote = B1-2 재검증 후 결정
```

B1-1의 다음 Revision은 새로운 스타일 탐색보다 **Actual Code / Runtime / R01~R15 / verify.txt / URL / SHA를 정확히 치환하고, Full-screen QA + Reproduction + Evaluation Defense를 검증하는 작업**을 우선한다.

