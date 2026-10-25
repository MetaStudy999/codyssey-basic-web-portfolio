# B1-1 — 나를 소개하는 웹페이지 처음부터 만들기 | Round 04 Agent

> 2026-10-25 사용자 지정 신규 작성 경로: `training/round-04-agent/`. 현재 상태: **PLAN_ONLY / NOT_STARTED**. 이 문서와 폴더 생성은 미션 구현·실행·배포 승인 또는 PASS를 의미하지 않습니다.

- 미션: B1-1 — 나를 소개하는 웹페이지 처음부터 만들기
- 저장소: `MetaStudy999/codyssey-basic-web-portfolio`
- 기준: 제2기 공식 Mission PDF와 공식 평가 요구사항
- 신규 실행 루트: `training/round-04-agent/`
- 신규 소스 루트: `training/round-04-agent/04-src/`
- 개발 주도: ChatGPT; 명령 실행·시험: Agent Codyssey MCP → WSL2 Ubuntu → Codex
- 새 미션 개발: 사용자 명시적 승인 이후에만 시작

## 새 작업 디렉터리

| 경로 | 역할 |
|---|---|
| `00-plan/` | 공식 요구사항, 개발 목표, 승인 내역, 고정 목차 |
| `01-requirements/` | 공식 요구사항·평가 기준 분석 |
| `02-analysis/` | 기존 소스·환경·완료 상태 비교 |
| `03-design/` | 새 미션 구조·화면·시스템 설계 |
| `04-src/` | **이 Round의 신규 미션 소스 유일 작성 위치** |
| `05-tests/` | 이 Round의 자동·수동 테스트 |
| `06-evidence/` | 이 Round의 실제 실행·배포·평가 증빙 |
| `07-evaluation/` | 평가 매핑, PASS/FAIL/NOT_VERIFIED |
| `08-presentation/` | 실제 증빙 기반 발표자료(PPTX/PDF) |
| `09-handoff/` | 최종 보고·인계·재현 방법 |
| `mission.yml` | 미션 식별자·경로·승인 상태 |

## 불변 원칙

1. 기존 Round 01~03 소스·이력·증빙을 보존하며, 신규 미션의 PASS로 전용하지 않습니다. 이번 사용자 지시로 기존 루트의 상태 안내·관리 문서 갱신과 이전 자료의 SHA 보존만 허용합니다.
2. 이전 Round 코드와 증빙을 참조할 수 있지만 이번 Round의 Runtime PASS / CLEAR로 자동 승격하지 않습니다.
3. 신규 파일은 반드시 위 `training/round-04-agent/` 내부에 작성하며, `04-src/` 이외에 새 미션 소스코드를 만들지 않습니다.
4. 신규 미션 소스 `04-src/`의 구현·실행·배포는 별도의 명시적 개발 승인 이후에만 진행합니다. 이번 루트 상태 안내의 `main` 게시 승인은 신규 미션 구현 승인이 아닙니다.
5. 실패는 실제 증거로 판정하며, 미확인은 NOT_VERIFIED로 기록합니다.
6. AWS·Discord·iMac 관련 작업은 범위에서 제외/보류합니다. 공식 필수 요구와 충돌할 때는 별도 협의합니다.
7. 이 폴더명의 Round 04 Agent는 **새 에이전트 수행 작업 경로**이며, 기존 `TRAINING-ROUNDS.md`의 학습 단계 `R04 HARDEN`을 자동으로 변경하거나 완료 처리하지 않습니다.

## 기존 루트 자료 정리

- [기존 루트 SHA·차수별 비교 기록](00-plan/LEGACY-SOURCE-INVENTORY.md)
- 루트 `index.html`은 **현재 미션 상태 안내 페이지**로 전환합니다. 실제 신규 미션 구현 페이지가 아닙니다.
- 기존 Round 03 포트폴리오는 [이전 구현 페이지](../round-03-apos/04-src/index.html)에 보존되어 있습니다.
- 신규 `04-src/`는 현재 README만 있으며 코드가 없습니다. 기존 코드를 이곳으로 복사하지 않습니다.
