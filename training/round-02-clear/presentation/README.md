# B1-1 Round 02 Presentation Pack

> **Mission:** B1-1 — 나를 소개하는 웹페이지 처음부터 만들기  
> **Round:** `round-02-clear`  
> **기준 레포:** [MetaStudy999/codyssey-basic](https://github.com/MetaStudy999/codyssey-basic)  
> **권장 발표 구조:** 12~14장 Learning & Evaluation Deck + Appendix / Quick Review

## 목적

이 디렉터리는 B1-1 미션 완료 후 실제 구현·검증·증빙을 평가 발표자료로 연결하기 위한 Presentation Pack 작업 위치다.

공통 표준:
- [Round 02 발표자료 생성 표준](https://github.com/MetaStudy999/codyssey-basic/blob/main/standards/ROUND-02-PRESENTATION-STANDARD.md)
- [Figma Master Template Specification](https://github.com/MetaStudy999/codyssey-basic/blob/main/templates/presentations/FIGMA-MASTER-TEMPLATE-SPEC.md)
- [Mission Presentation Pack Template](https://github.com/MetaStudy999/codyssey-basic/blob/main/templates/presentations/MISSION-PRESENTATION-PACK-TEMPLATE.md)

## 제작 흐름

```text
Mission CLEAR / Evaluation Ready
→ 실제 Evidence 수집
→ OUTLINE.md
→ EVIDENCE-MAP.md
→ SCRIPT.md
→ Diagram / Image Asset
→ Image-First Precision Composite 또는 Figma/PPT-native 구성
→ Truth Replacement
→ Accuracy / Evidence QA
→ PDF / PPT Export
→ 발표 리허설
```

## 기본 원칙

- Repository의 실제 코드·Runtime·Evidence가 사실의 원본이다.
- ChatGPT는 스토리라인·대본·다이어그램·개념 이미지를 만든다.
- Figma는 편집 가능한 Master와 최종 레이아웃을 관리할 수 있다.
- 고품질 Golden Deck은 Image-First Precision Composite 방식을 사용할 수 있다.
- AI Visual은 배경·캐릭터·분위기·개념 시각화를 담당하고, 정확한 Text/Code/Runtime/Evidence는 실제 Source에서 후합성한다.
- 실제 Screenshot을 AI 생성 이미지로 대체하지 않는다.
- AI 생성 이미지는 개념 설명용 Asset으로만 사용한다.
- PASS 주장에는 실제 Evidence가 있어야 한다.
- Secret·Token·Password·개인정보는 발표자료에서 제거한다.

## 생성할 파일

미션이 Evaluation Ready 또는 CLEAR에 도달하면 필요에 따라 다음을 만든다.

```text
presentation/
├── README.md
├── OUTLINE.md
├── SCRIPT.md
├── EVIDENCE-MAP.md
├── GOLDEN-DECK-QUALITY.md
└── assets/
```

빈 형식을 맞추기 위해 미리 만들지 않고 실제 발표자료 생성 시 작성한다.


---

## B1-1 Interactive Peer Evaluation Deck

동료평가 1Page 문서를 기반으로 **Reveal.js 기반 인터랙티브 발표 슬라이드**를 추가했다.

- Deck Source: [peer-evaluation-deck/](peer-evaluation-deck/)
- Entry: [peer-evaluation-deck/index.html](peer-evaluation-deck/index.html)
- Outline: [OUTLINE.md](OUTLINE.md)
- Script: [SCRIPT.md](SCRIPT.md)
- Evidence Map: [EVIDENCE-MAP.md](EVIDENCE-MAP.md)

GitHub Pages 예상 URL:

`https://metastudy999.github.io/codyssey-basic-web-portfolio/training/round-02-clear/presentation/peer-evaluation-deck/`

### UI/UX Stack

- Reveal.js 5.1.0 — Slide Navigation / Progress / Notes / Zoom
- Mermaid 11 — Architecture / Data Flow
- Lucide — UI Icon
- Custom CSS — CODYSSEY 16:9 Presentation Design System

### Deck 구성

1. Mission / 한눈에 보기
2. Problem & Concepts
3. Requirement → Implementation
4. System / Data Flow
5. Runtime Result
6. Verification / Evidence
7. Evaluation Explanation


---

## B1-1 Golden Deck Quality Status — 2026-10-06

### Evolution

```text
PPT-native
→ Hybrid Golden Learning Deck
→ Cinematic Hybrid
→ Image-First Precision Composite
```

B1-1에서 Image-First 방식의 시각 품질은 긍정적으로 확인했다. 다만 AI가 생성한 작은 한글·코드·수치·Runtime Mockup을 실제 Evidence로 사용할 수 없다는 위험도 확인했다.

### B1-1에서 확정한 규칙

- AI Visual은 `AI-VISUAL` 또는 `MOCKUP`으로 표시한다.
- 실제 Screenshot이 아닌 생성 화면에 `REAL EVIDENCE`를 붙이지 않는다.
- 실제 Code는 Repository에서 추출한다.
- 실제 Runtime/Evidence는 `training/round-02-clear/evidence/`의 원본을 사용한다.
- Requirement ID, URL, Commit SHA, PASS 수치는 실제 Source와 대조한다.
- Truth Replacement Gate 통과 전에는 `FINAL` 또는 `EVIDENCE READY`로 승격하지 않는다.

상세 품질 기록: [GOLDEN-DECK-QUALITY.md](GOLDEN-DECK-QUALITY.md)
