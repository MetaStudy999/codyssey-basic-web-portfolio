# B1-1 기존 루트 자료 비교·분류 기록 (2026-10-25)

## 원칙

이번 Round 04 Agent는 `04-src/`에서 신규 작성합니다. 기존 Round 01~03 및 루트 구현은 참고 대상으로 보존하고 재사용 구현 또는 신규 PASS로 주장하지 않습니다. 기존 원본을 Git Blob SHA 그대로 이관/사본화하며, 오래된 URL 호환을 위해 일부 루트 파일을 남깁니다.

## 1. Git Blob 비교 (main 기준 재분류)

| 기존 루트 | 이전 training/legacy 자료 | 원본 동일 여부 | 새 기준 |
|---|---|---|---|
| `css/style.css` | `legacy/round-01-portfolio/css/style.css` | **SAME** `63a67f2adca9815a31fc7aab439a1989a4d4887c` | 이전 1기 호환 파일; 새 Round 코드 아님 |
| `js/script.js` | `legacy/round-01-portfolio/js/script.js` | **SAME** `e0b8c011fbae55c1a8913b3db0ceb7fe71cf2367` | 이전 1기 호환 파일; 새 Round 코드 아님 |
| `images/profile-placeholder.svg` | `legacy/round-01-portfolio/images/profile-placeholder.svg` | **SAME** `8cf400174e07418a22a401e756230ec6d3feec0a` | 이전 1기 호환 파일; 새 Round 코드 아님 |
| `index.html` | `training/round-03-apos/04-src/index.html` | **DIFFERENT** — 루트 전용 상대경로·기존 1기 링크가 있음 | 배포 당시 루트 HTML 원본을 Round 03 인계 위치에 별도 보존 |
| `README.md` | `training/round-02-clear/README.md` | **DIFFERENT** — 루트는 1·2기 통합 과거 설명 | 전체 원문을 Round 02 문서로 별도 보존 |
| `WORKING-RULES.md` | `training/round-02-clear/README.md` | **DIFFERENT** — 기존 Round 02 운영 안내 | 원문을 Round 02 문서로 보존 |
| `b4-1-mission.pdf` / `.md` / `b4-1-evaluation.md` | `training/round-01-clear/` 이전 B4-1 문맥 | 과거 번호 자료, 별도 동일 파일은 확인되지 않음 | Round 01 `legacy-official/`에 원본 SHA로 보존 |

## 2. 이전 루트 원본 보존 위치

| 이전 루트 원본 | 보존 위치 | Git Blob SHA |
|---|---|---|
| `index.html` | `training/round-03-apos/09-handoff/ROOT-INDEX-HISTORICAL-20261025.html` | `a62452ac905cd299fedcdddbb31efa95683cc295` |
| `README.md` | `training/round-02-clear/docs/ROOT-README-HISTORICAL-20261025.md` | `706f43d8b63990b828c9d73c084c58c2cfee033a` |
| `WORKING-RULES.md` | `training/round-02-clear/docs/ROOT-WORKING-RULES-HISTORICAL-20261025.md` | `83b68fe521de823a11191eba17c23a70411156ea` |
| `b4-1-mission.pdf` | `training/round-01-clear/legacy-official/b4-1-mission.pdf` | `acfa9a88b5faa413ec4d0035993d686c15235501` |
| `b4-1-mission.md` | `training/round-01-clear/legacy-official/b4-1-mission.md` | `7bfa570cd259a7a06a92161fc3fa455a8b5b67f9` |
| `b4-1-evaluation.md` | `training/round-01-clear/legacy-official/b4-1-evaluation.md` | `a205194d79128f6856ac36192ba16b9177790e3a` |

`ROOT-INDEX-HISTORICAL-20261025.html`은 **원본 보존 스냅샷**입니다. 상대경로가 옛 루트 기준이므로 보존 파일을 직접 열어 정상 화면이라 주장하지 않습니다. 실제 기존 Round 03 화면은 `training/round-03-apos/04-src/index.html` 경로를 사용합니다.

## 3. 호환을 위해 유지하는 파일

- `b4-1-mission.pdf`, `b4-1-mission.md`, `b4-1-evaluation.md`: 과거 외부 링크가 깨지지 않도록 루트 파일을 유지하고 Round 01에 별도 보존합니다.
- `css/style.css`, `js/script.js`, `images/profile-placeholder.svg`: 루트 파일을 유지하되 `legacy/round-01-portfolio/`와 동일한 SHA로 확인했습니다.
- `.github/`, `.vscode/`, `.gitignore`, `.editorconfig`, `.gitattributes`: 운영/저장소 설정이므로 이전 실습 코드와 구분하여 루트 유지.
- `MISSION-METADATA.yml`: 동일 미션 번호와 현재 작성 경로를 표시하는 운영 설정으로 루트 유지.

## 4. 현재와 과거를 구분하는 기준

- 루트 `index.html`: 현재 미션 **안내 페이지**, 개발/평가 결과물 아님
- 과거 Round 03 구현: `training/round-03-apos/04-src/` (**기존 완료 이력 유지**)
- 새 Round 04 구현: `training/round-04-agent/04-src/` (**신규 작성 전용, 현재 코드 없음**)
- 새 Round 04 시험·증빙·공식 평가: 실행 전이므로 **NOT_VERIFIED**

이번 정리는 저장 경로와 설명의 정합성 작업이며, 신규 B1-1 개발·평가 PASS를 의미하지 않습니다.
