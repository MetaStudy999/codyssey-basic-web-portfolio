# AGENTS.md — B1-1 Presentation Pack

이 디렉터리의 PowerPoint / Image Slide / Figma / PDF / Web Slide 작업은 아래 순서를 따른다.

## Canonical Context Order

1. `MetaStudy999/codyssey-basic/standards/PRESENTATION-CANONICAL-DECISIONS.md`
2. `MetaStudy999/codyssey-basic/standards/ROUND-02-PRESENTATION-STANDARD.md`
3. `GOLDEN-DECK-QUALITY.md`
4. `IMAGE-STUDY-DECK-V3-ROADMAP.md`
5. `TRUTH-REPLACEMENT-MAP.md`
6. `EVIDENCE-MAP.md`
7. 실제 Code / Runtime / Verification / Evidence

## B1-1 Fixed Direction

```text
Image-first
+ Text-minimal
+ Study-first
+ 30~45 slides allowed
+ Comic-assisted
+ Truth-first
```

`슬라이드`와 `PPT`는 최종 사용자 경험 관점에서 동일한 이미지형 화면 단위로 취급한다.
PowerPoint는 완성된 Image Slide를 순서대로 담는 Container로 사용할 수 있다.

## Do Not Regress

- 12~16장 발표 최적화만을 이유로 학습 내용을 삭제하지 않는다.
- 한 장에 작은 글자를 많이 넣지 않는다. 내용을 나눠 슬라이드 수를 늘린다.
- AI 생성 Code를 `CODE`로 표시하지 않는다.
- AI 생성 Browser/UI를 `RUNTIME` 또는 `EVIDENCE`로 표시하지 않는다.
- React / Next.js / Vercel 등의 비교 대안을 실제 B1-1 구현 구조와 혼동하지 않는다.
- `onClick` inline handler를 실제 구현처럼 사용하지 않는다. B1-1은 실제 Repository의 `addEventListener()` 기반 구현을 우선한다.
- Repository PASS를 Human Mastery PASS로 바꾸지 않는다.

## Truth Badges

- `AI-VISUAL`: 설명용 생성 이미지
- `EXPLAIN`: 단순화된 개념/Flow
- `CODE`: 실제 Repository Code
- `RUNTIME`: 실제 실행 Screenshot
- `EVIDENCE`: 실제 검증 근거
- `OFFICIAL`: 공식 요구/평가
- `DECISION`: 설계 선택/대안
- `MASTER`: 실제 숙달 검증 완료 시에만

## Current Priority

새 스타일 생성보다 **Truth Replacement**가 우선이다.
특히 기존 Visual Storyboard 01~32 중 Code / Runtime / Verification / Security 표현을 실제 B1-1 Source로 교정한다.

그 다음 33~45 Study Note 확장을 진행한다.
