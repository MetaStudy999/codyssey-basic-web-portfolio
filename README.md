# CODYSSEY B1-1 — 나를 소개하는 웹페이지 처음부터 만들기

이 Repository는 **코디세이 AI 올인원 1기 교육생의 학습 포트폴리오**를 정리하는 프로젝트입니다.

1기에서 실제로 수행하고 학습한 경험을 중심으로 구성하되, 2기에서 교육생 친화적으로 보완된 **B1-1 Mission PDF와 오리엔테이션 체계**를 참고하여 구조·기술 스택·평가 관점을 더 명확하게 재정리합니다.

따라서 **사용자 소속은 1기**이며, 2기 자료는 최신 보완 체계를 참고하기 위한 기준 자료입니다.

---

## 1. Mission

- Mission ID: **B1-1**
- 제목: **나를 소개하는 웹페이지 처음부터 만들기**
- 분야: **AI/SW 기초 — 웹 기초와 프론트엔드**
- 구현 방식: **HTML + CSS + Vanilla JavaScript**
- 현재 작업 Round: **`training/round-02-clear/`**
- Round 02 작업 브랜치: **`round-02/b1-1-web-portfolio`**
- 현재 배포 브랜치: **`main`**
- GitHub Pages Source: **`main:/`**

---

## 2. 구현 기능

### HTML

- Semantic HTML
  - `header`
  - `nav`
  - `main`
  - `section`
  - `article`
  - `footer`
- Hero
- About
- Skills
- Projects
- Contact
- 이미지 `alt`
- `label`과 입력 필드 연결
- 외부 CSS / JavaScript 분리
- JavaScript `defer`

### CSS

- CSS Custom Properties
- Mobile First 반응형 설계
- Flexbox
- CSS Grid
- `768px`, `1024px` Breakpoint
- Light / Dark Theme
- 프로젝트 카드 반응형 Grid
- Scroll Reveal Animation
- 모바일 Navigation

### JavaScript

- `const` / `let`
- `querySelector`
- `addEventListener`
- Arrow Function
- Destructuring
- `map()`
- `filter()`
- `forEach()`
- `fetch()`
- `async / await`
- `try / catch`
- `localStorage`
- `IntersectionObserver`

---

## 3. 주요 기능

### 3.1 Responsive Navigation

- 모바일 Hamburger Menu
- 메뉴 열기 / 닫기
- Navigation 클릭 시 Smooth Scroll
- 메뉴 선택 후 자동 닫힘

### 3.2 Dark Mode

Light / Dark Theme를 변경할 수 있습니다.

선택한 Theme는 `localStorage`에 저장되어 새로고침 후에도 유지됩니다.

```text
Click Event
→ State 변경
→ renderTheme()
→ DOM 변경
→ localStorage 저장
```

### 3.3 Scroll UI

현재 구현 기준값:

- Navigation Header 상태 변경: **60px 이상**
- Scroll Top 버튼 표시: **300px 이상**
- Scroll Top 클릭 시 페이지 상단으로 Smooth Scroll

### 3.4 Scroll Reveal

`IntersectionObserver`를 사용하여 Section이 화면에 진입할 때 한 번만 나타나는 애니메이션을 구현했습니다.

현재 Observer 기준값:

- `threshold`: **0.2**

### 3.5 Contact Form Validation

다음을 검증합니다.

- 이름 필수 입력
- 이메일 필수 입력
- 이메일 형식
- 메시지 필수 입력
- 필드별 오류 메시지
- 정상 입력 성공 메시지

현재 Contact Form은 **입력 검증 UI 범위**이며 실제 이메일 전송 기능은 포함하지 않습니다.

### Skills Roadmap

Skills 섹션은 **1기 학습 경험을 중심으로**, 2기 공식 오리엔테이션/콘텐츠 소개 PDF에서 보완된 5단계 체계를 참고하여 학습 역량을 재정리합니다.

중복을 줄이기 위해 같은 기술이 여러 단계에서 반복되더라도 **처음 본격적으로 습득하는 단계**에 배치했습니다.

- 1. 입학 연수 — AI 도구 적응, 개발환경, Python 기초, Peer Review, 자기주도 학습, 문제 정의
- 2. AI 도구 학습 — 웹/React, Python 협업, Linux/OS, 자료구조·알고리즘, SQL/FastAPI, API, Cloud/AI 서비스
- 3. AI 심화 학습 — 데이터 분석, AI 수학, CV, NLP, ML/XAI, 딥러닝, 멀티모달
- 4. AI 응용 학습 — 산업 도메인 문제 구조화, KPI, End-to-End 아키텍처, MVP, 사업화 가설
- 5. 파이널 프로젝트 — 제품 완성, 시장·고객 검증, 비즈니스 모델, 운영성, 발표·Demo Day·IR

### Development Environment & Tech Stack

Skills와 별도로 **개발환경(Development Environment)** 을 실제 개발 흐름 순서로 정리합니다.

표기 원칙:

- **PDF**: 2기에서 보완된 오리엔테이션·Mission PDF를 최신 참고 기준으로 활용
- **LAB**: 실제 실습 환경
- **2026 EXTENSION**: 최신 확장/권장 기술이며 공식 Mission 필수는 아님

18개 개발환경 계층:

1. Host · OS
2. Virtualization · Linux Runtime
3. Runtime · Package Manager
4. Language
5. IDE · CLI
6. AI Coding · Agent
7. Frontend
8. Backend · API
9. Database · ORM
10. Cache · Vector · Search
11. Cloud AI · Local AI
12. Container · Kubernetes
13. Cloud · PaaS · BaaS
14. Automation · MCP
15. Testing · Quality
16. Observability · Operations
17. Security
18. Domain Platform

실습 기본 흐름:

```text
Windows 11 Pro / iMac
→ WSL2 / OrbStack
→ Ubuntu
→ FastAPI / React
→ SQLAlchemy / API
→ Database / Cloud
```

데이터베이스는 PDF 기준 SQLite / MySQL / PostgreSQL / H2를 구분하고,
FastAPI에서는 SQLAlchemy ORM을 연결해 CRUD·관계·인증 흐름으로 확장합니다.

### 2026 Modern Extension & Security Baseline

공식 Mission PDF 요구와 최신 확장 기술을 **구분해서** 관리합니다.

#### 공식 PDF 기반

- B1-1: Vanilla HTML/CSS/JavaScript, Chrome, VS Code + Live Server, GitHub Pages/API
- B1-2: React 18+, Supabase/Firebase, JavaScript/TypeScript(선택), Vercel/Netlify
- B2: Python 3.10+, Git/GitHub, 표준 라이브러리·협업
- B3: AWS/VPC/EC2/IAM/Security Group, Python AI API CLI, 환경변수 Secret
- B4: Ubuntu/Linux, Bash, SSH/UFW·firewalld, ACL, cron, Docker/격리환경
- B5: Python 기반 Mini Redis/Mini Git, 자료구조·알고리즘 직접 구현
- B6: SQLite/MySQL/PostgreSQL/H2, FastAPI/Uvicorn/SQLAlchemy/Jinja2, 인증 패키지
- B7: FastAPI 기반 AI 챗봇, SQLite 권장, React+REST 풀스택, AI API, Cloud 배포

#### 실습 개발환경

- iMac/macOS → OrbStack → Ubuntu
- Windows 11 Pro → WSL2 → Ubuntu
- Backend → Python 3.10+ / FastAPI / Uvicorn / Pydantic / SQLAlchemy / Jinja2
- Database → SQLite / PostgreSQL / MySQL / H2 / Supabase PostgreSQL
- DB Client → DB Browser for SQLite / DBeaver / TablePlus / DataGrip / psql / sqlite3
- Database Security → 최소권한 계정, 외부 포트 최소화, 파라미터 바인딩, 백업/복구

```text
iMac / Windows 11 Pro
→ OrbStack / WSL2
→ Ubuntu
→ FastAPI
→ SQLAlchemy
→ SQLite / PostgreSQL
```

#### 2026 선택 확장

- Local AI: Ollama, Llama, Qwen, DeepSeek, Gemma, Local Embedding
- Agentic Development: Google Antigravity, Claude Code, Codex, Cursor Composer, MCP
- Automation: Make AI Agents, n8n, Webhook/API Workflow
- Container Orchestration: Docker → Kubernetes

#### Security Baseline

보안은 **Prevent → Detect → Respond → Recover** 생명주기로 관리합니다.

1. **Application · API**
   - Server-side 인증·인가·접근제어
   - 입력 검증·Injection/SSRF 방어
   - Rate Limit·Brute-force 방어
   - HTTPS·HSTS·Cookie·CORS·CSRF 정책
2. **Identity · Session · Secret**
   - MFA/Passkey, OAuth2/OIDC
   - JWT 만료·갱신·폐기, Session Timeout
   - .env·Secret Manager·KMS
   - Short-lived Credential 우선
3. **AI · Agent**
   - Direct/Indirect Prompt Injection
   - Sensitive Data Leakage·Model/Data Poisoning
   - LLM Output 검증·Tool Allowlist
   - RAG ACL·Human Approval·Token/Cost/Loop Limit
4. **Repository · CI/CD · Supply Chain**
   - Secret Scanning·Push Protection
   - Dependabot·Dependency Review·CodeQL
   - Lock File·Pinned Dependency·GitHub Actions 최소권한
   - SBOM·Provenance·Signed Artifact
5. **Database · Data · Privacy**
   - Least Privilege·RLS
   - Encryption at Rest·TLS in Transit
   - Parameter Binding·Data Minimization·PII Masking
   - Backup Encryption·Restore Test·Retention·Audit Trail
6. **Cloud · Container · Kubernetes**
   - IAM/RBAC·Namespace/Network 분리
   - Trusted Registry·Image Scan·Digest Pinning
   - runAsNonRoot·readOnlyRootFilesystem·Seccomp
   - Pod Security Standards·NetworkPolicy·Secret Encryption
7. **Observability · Incident Response**
   - Security/Audit Log·Metric·Trace·Health Check
   - Alert·이상 징후 탐지·Time Synchronization
   - Incident Response·Root Cause Analysis
   - Log Retention·Backup/Restore Drill
8. **Developer Workstation**
   - Windows/macOS/Ubuntu 정기 Patch
   - Disk Encryption·MFA/Passkey·SSH Key 보호
   - Shell History·IDE Extension·Local DB 노출 점검
   - AI Agent 최소권한·Local Model 출처/라이선스 검증


상세 전수검토표:

`training/round-02-clear/docs/curriculum-tech-security-matrix.md`

### Portfolio UX & Accessibility

포트폴리오 전체 정보구조를 방문자가 빠르게 이해하도록 다음처럼 분리합니다.

```text
Home
→ About
→ Skills
→ Projects
→ Tech Stack
→ Security
→ Contact
```

보완 사항:

- Skills / Projects / Tech Stack / Security를 독립 Section으로 분리
- Project 카드 제목은 Repository 이름보다 **한글 Mission 제목**을 우선 표시
- Repository 이름은 보조 정보로 표시
- GitHub API 조회 범위를 `per_page=100`으로 확대
- Sticky Header 이동을 위한 `scroll-margin-top`
- 키보드 사용자를 위한 Skip Link / `:focus-visible`
- 현재 Section을 Navigation에 `aria-current="location"`으로 표시
- `prefers-reduced-motion` 지원
- 뒤로가기 시 이전 스크롤 위치를 보존하고 일반 최초 진입만 상단에서 시작
- Contact는 실제 전송이 아닌 입력 검증 UI Demo임을 명시
- SEO: title / description / canonical / Open Graph / theme-color 반영

### 3.6 GitHub API Projects

Projects는 코디세이 학습 단계별 카테고리로 구성합니다.

```text
전체 | 1. 입학 연수 | 2. AI 도구 학습 | 3. AI 심화 학습 | 4. AI 응용 학습 | 5. 파이널 프로젝트
```

현재 카테고리 정책:

- **전체**: 현재 공개된 과정 Repository 표시
- **1. 입학 연수**: `레포 준비중`
- **2. AI 도구 학습**: Repository 이름이 `codyssey-basic`으로 시작하는 공개 Repository만 표시
- **3. AI 심화 학습**: `예정`
- **4. AI 응용 학습**: `예정`
- **5. 파이널 프로젝트**: `예정`

현재 실제 Repository가 연결된 과정은 AI 도구 학습이므로, `전체`도 현재는 동일한 `codyssey-basic*` Repository 집합을 보여 줍니다.

GitHub REST API를 이용해 `MetaStudy999` 계정의 공개 Repository를 불러온 뒤 카테고리에 맞게 필터링합니다.

처리 상태:

```text
idle
→ loading
→ success
→ error
→ retry
→ success
```

Repository가 없는 경우를 위한 `empty` 상태도 처리합니다.

네트워크 오류 발생 시 오류 메시지와 다시 시도 기능을 제공합니다.

GitHub API 결과는 **페이지네이션(Pagination)** 으로 여러 페이지를 이동하며 볼 수 있습니다.

화면 폭에 따라 한 페이지의 카드 수를 행렬에 맞게 조정합니다.

- Mobile: **4개** — 1열 × 4행
- Tablet: **6개** — 2열 × 3행
- Desktop: **9개** — 3열 × 3행

예를 들어 공개 Repository가 30개이고 Desktop이라면 1페이지에 1–9번째 카드가 표시되고, `이전 / 1 / 2 / 3 / 4 / 다음` 버튼으로 이동합니다.

상태 문구 예:

`30개의 공개 프로젝트 중 1–9번째를 표시했습니다. (1/4 페이지)`

### Mission Number & Manual Progress

AI 도구 학습 Repository는 주제 연결과 정렬을 위해 2기에서 보완된 Mission ID를 수동 매핑하여 표시합니다. 이는 사용자 소속 기수를 의미하지 않습니다.

정렬 순서:

```text
B1-1 → B1-2 → B2-1 → B2-2 → ... → B7-2 → 공통
```

현재 미션:

```text
B1-1 · 진행
```

각 카드에는 Mission 번호와 진행 상태를 표시합니다.

```text
B1-1  진행
B1-2  준비
...
```

진행 상태는 자동으로 판단하지 않고 `js/script.js`의 `MISSION_PROGRESS`를 직접 수정합니다.

사용 가능한 값:

```text
준비 | 진행 | 완료
```

예:

```js
const MISSION_PROGRESS = {
  "B1-1": "진행",
  "B1-2": "준비",
  "B2-1": "준비",
};
```

현재 B1-1은 최종 CLEAR 전이므로 `진행`으로 두고, 이후 실제 완료 시 수동으로 `완료`로 변경합니다. 상태 자동화는 후속 고도화로 미룹니다.

### Project Card Typography & Links

Repository 이름과 설명 길이가 달라도 카드가 흔들리지 않도록 Typography 규칙을 고정했습니다.

- 카드 높이: 동일
- Repository 제목: 최대 2줄
- 설명: 최대 3줄
- 제목 줄간격: 1.35
- 설명 줄간격: 1.65
- 긴 Repository 이름은 자연스럽게 줄바꿈
- 링크 영역은 카드 하단에 고정

카드 하단 링크는 버튼이 아니라 **가운데 정렬된 텍스트 링크**로 표시합니다.

```text
깃허브 | 웹페이지
```

표시 규칙:

- GitHub URL과 Website URL이 모두 있으면: `깃허브 | 웹페이지`
- GitHub URL만 있으면: `깃허브`
- Website URL만 있으면: `웹페이지`
- 존재하지 않는 링크는 비활성 버튼으로 남기지 않고 아예 표시하지 않음
- 두 링크가 있을 때만 구분자 `|` 표시

링크 개수가 달라도 액션 영역은 카드 하단에서 **가로 가운데 정렬**합니다.

### Pagination UX

페이지 번호는 **화면에 고정(Fixed)** 하지 않고 Projects 섹션의 **전용 Pagination 영역**에 고정합니다.

페이지를 바꿔도 브라우저가 자동으로 위쪽으로 이동하지 않으며, 현재 스크롤 위치를 유지합니다.

또한 마지막 페이지처럼 실제 카드 수가 적어도 보이지 않는 Layout Placeholder로 남은 Grid Slot을 유지하므로, **Pagination의 세로 위치가 페이지마다 움직이지 않습니다.**

- Mobile: 항상 4 Slot
- Tablet: 항상 6 Slot
- Desktop: 항상 9 Slot
- 마지막 페이지의 빈 Slot은 화면에 보이지 않지만 Layout 공간은 유지
- 카드 높이도 일정하게 맞춰 Pagination 위치 안정화
- 페이지 클릭 시 자동 Scroll 없음

이 구조는 Pagination을 화면에 떠 있게 만드는 방식보다 사용자의 문맥과 레이아웃을 안정적으로 유지합니다.

인증 없는 GitHub API는 시간당 요청 제한이 있으므로, HTTP 403도 공통 error 상태로 처리합니다.

---

## 4. Event → State → Render

이 프로젝트에서는 사용자 Event와 외부 API 결과를 State에 반영한 후 Render 함수를 통해 DOM을 갱신합니다.

```text
Event
↓
State
↓
Render
↓
DOM
```

대표 흐름:

### Theme

```text
Theme Click
→ state.theme
→ renderTheme()
→ DOM
```

### Contact Form

```text
Input / Submit
→ state.form
→ validateForm()
→ renderFormErrors()
→ DOM
```

### GitHub API

```text
fetch()
→ state.projects
→ renderProjects()
→ DOM
```

---

## 5. 프로젝트 구조

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── .gitkeep
│   └── profile-placeholder.svg
└── training/
    ├── round-01-clear/
    └── round-02-clear/
        ├── CHECKLIST.md
        ├── README.md
        ├── docs/
        ├── environment/
        └── evidence/
```

---

## 6. 개발 환경과 로컬 실행

### VS Code + Live Server

Repository에는 Live Server 권장 확장과 Workspace 설정을 포함합니다.

```text
.vscode/extensions.json
.vscode/settings.json
```

VS Code에서 Repository를 열고 `index.html`을 **Open with Live Server**로 실행할 수 있습니다. 기본 Live Server 포트는 `5500`으로 설정합니다.

### 독립 검증용 Python HTTP Server

Round 02 실제 Runtime 검증에서는 정적 서버를 독립적으로 확인하기 위해 Python HTTP Server도 사용했습니다.

```bash
cd "$HOME/projects/codyssey-basic-web-portfolio"
python3 -m http.server 8000
```

브라우저:

```text
http://localhost:8000
```

---

## 7. Round 02 실제 Runtime 검증

| 검증 항목 | 결과 |
|---|---|
| Local HTTP Server | PASS |
| 기본 페이지 렌더 | PASS |
| Dark Mode | PASS |
| Theme Persistence | PASS |
| Mobile Hamburger Menu | PASS |
| Smooth Scroll | PASS |
| Scroll Top | PASS |
| Contact Form Validation | PASS |
| GitHub API Loading | PASS |
| GitHub API Success | PASS |
| GitHub API Error | PASS |
| GitHub API Retry | PASS |
| GitHub API Empty | PASS |
| Responsive 375px | PASS |
| Responsive 768px | PASS |
| Responsive 1200px | PASS |
| IntersectionObserver | PASS |
| Secret Pattern Scan | PASS |
| GitHub CLI 설치 | PASS |
| GitHub CLI 인증 | PASS |
| Round 02 Branch Push | PASS |

---

## 8. Evidence

정적 검증 Evidence:

```text
training/round-02-clear/evidence/structure.txt
training/round-02-clear/evidence/verify.txt
```

수행 과정과 Runtime 검증 기록:

```text
training/round-02-clear/docs/implementation-log.md
training/round-02-clear/CHECKLIST.md
```

과거 Round 01 결과나 예상 출력을 Round 02의 실제 Evidence로 대신하지 않습니다.

---

## 9. GitHub CLI

GitHub 명령줄 인터페이스(GitHub Command Line Interface, `gh`)를 설치하고 GitHub 인증을 확인했습니다.

```bash
gh --version
gh auth status
```

인증 계정:

```text
MetaStudy999
```

Password, Token, Personal Access Token(PAT) 등의 Secret은 Repository와 Evidence에 기록하지 않습니다.

---

## 10. GitHub Pages

GitHub Pages에 실제 배포되었습니다.

```text
Deployment URL: https://metastudy999.github.io/codyssey-basic-web-portfolio/
```

실제 GitHub Pages URL에서 기본 화면, Dark Mode persistence, GitHub API, Mobile 375px, Contact/Scroll/Reveal Runtime을 재검증했습니다.

---

## 11. Screenshot Evidence

실제 GitHub Pages 배포 화면에서 다음 Screenshot Evidence를 확보했습니다.

### Desktop — Light Mode

![B1-1 Desktop Light](training/round-02-clear/evidence/b1-1-pages-desktop-light.png)

### Mobile — 375px

![B1-1 Mobile 375px](training/round-02-clear/evidence/b1-1-pages-mobile-375.png)

### Desktop — Dark Mode

![B1-1 Desktop Dark](training/round-02-clear/evidence/b1-1-pages-desktop-dark.png)

세 이미지는 실제 배포 페이지를 기준으로 촬영했으며,
Round 01 자료나 예상 이미지를 Round 02 Evidence로 사용하지 않았습니다.

---

## 12. Legacy Reference

Repository의 다음 자료는 같은 주제의 과거 참고자료입니다.

```text
b4-1-mission.pdf
b4-1-mission.md
b4-1-evaluation.md
training/round-01-clear/
```

현재 포트폴리오 재정리 작업은 다음 Training Round에서 관리합니다. 이 Round 이름은 Repository 내부 작업 차수이며 코디세이 공식 1기·2기와 동일한 개념이 아닙니다.

```text
training/round-02-clear/
```

---

## 13. CLEAR 원칙

다음 조건을 모두 만족해야 최종 CLEAR로 판정합니다.

```text
공식 요구사항
+ 실제 구현
+ 실제 Runtime
+ Verification PASS
+ 필요한 Evidence
+ GitHub Pages 실제 배포
+ 배포 사이트 재검증
+ 평가 설명 가능
+ Secret 노출 없음
```

## 평가 준비 바로가기

- [최종 요구사항/검증 상태](training/round-02-clear/docs/final-verification.md)
- [평가 설명 준비](training/round-02-clear/docs/evaluation-prep.md)
- [요구사항 연결표](training/round-02-clear/docs/requirements-mapping.md)
- [Round 02 Checklist](training/round-02-clear/CHECKLIST.md)

### 현재 상태

**Repository 구현·배포·Evidence·평가자료: READY**

남은 것은 사용자가 평가 전에 전체 흐름을 빠르게 훑고 자기 말로 설명하는 단계입니다. 사용자 구두 설명/모의평가 전에는 최종 `B1-1 CLEAR`로 표시하지 않습니다.
