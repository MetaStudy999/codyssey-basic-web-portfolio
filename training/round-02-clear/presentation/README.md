# B1-1 Round 02 Presentation Pack

> **Mission:** B1-1 — 나를 소개하는 웹페이지 처음부터 만들기  
> **Round:** `round-02-clear`  
> **기준 레포:** [MetaStudy999/codyssey-basic](https://github.com/MetaStudy999/codyssey-basic)  
> **권장 발표 구조:** 7장 Core Deck

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
→ Figma Master
→ PDF / PPT Export
→ 발표 리허설
```

## 기본 원칙

- Repository의 실제 코드·Runtime·Evidence가 사실의 원본이다.
- ChatGPT는 스토리라인·대본·다이어그램·개념 이미지를 만든다.
- Figma는 편집 가능한 Master와 최종 레이아웃을 관리한다.
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
