# CODYSSEY 제2기 — Mission Tech & Security Matrix

> 목적: 제2기 오리엔테이션 2종 + B1-1~B7-2 Mission PDF의 **개발환경·제약·보안·기술 스택**을 한 곳에 정리한다.
>
> 원칙: PDF에 명시된 요구와 2026년 최신 확장 권고를 섞지 않는다.

## 1. PDF 기반 Mission Matrix

| Mission | 공식 개발환경 / 핵심 기술 | 공식 보안·운영 포인트 |
|---|---|---|
| B1-1 | HTML, CSS, JavaScript, VS Code, Live Server, Chrome, GitHub API/Pages | 외부 프레임워크 금지, inline onclick/style 금지, API Rate Limit |
| B1-2 | React 18+, React Router, Supabase/Firebase, JS/TS 선택, Vercel/Netlify | API Key=.env, .gitignore, 배포 환경변수 분리 |
| B2-1 | Python 3.10+, CLI, JSONL/CSV, 표준 라이브러리 | 원자적 저장 고려, 입력검증, 오류 시 안전 종료 |
| B2-2 | Python 3.10+, Git, GitHub, GitHub Flow, PR/Review | Branch Protection, 강제 push/rebase 제한, 재현 가능한 충돌 기록 |
| B3-1 | AWS, VPC/Subnet/IGW/EC2/EBS, Ubuntu/Amazon Linux, Nginx, Docker(보너스) | IAM 최소권한, SG 최소 포트, SSH 개인 IP 제한, 비용/리소스 정리 |
| B3-2 | Python 3.10+, CLI, Git status/diff, AI REST API | API Key 환경변수, diff Secret/PII 마스킹, safe-mode, 요청 수 제한 |
| B4-1 | Ubuntu 22.04+, Bash, SSH, UFW/firewalld, ACL, cron | Root SSH 차단, 비표준 SSH 포트, 허용 포트 최소화, 권한 분리, Secret 파일 보호 |
| B4-2 | Linux, Python 기반 제공 바이너리, Docker/격리환경 권장, ps/top/htop | 방화벽 주의, 일반 사용자 실행, 로그·관제 기반 장애 진단 |
| B5-1 | Python 3.8+, CLI, 해시맵/연결리스트/힙 직접 구현 | 네트워크/영속성 제외, 라이브러리 제한으로 구현 원리 학습 |
| B5-2 | Python 3.10+, CLI, DAG/탐색/역색인/정렬 직접 구현 | 그래프 라이브러리·표준 정렬 API 제한, 입력 오류 표준화 |
| B6-1 | SQLite/MySQL/PostgreSQL/H2 중 1, DBeaver/TablePlus/DataGrip/CLI | PK/FK/NOT NULL/UNIQUE로 무결성, 로컬 DB 범위 제한 |
| B6-2 | Python 3.10+, FastAPI, Uvicorn, SQLAlchemy, Jinja2, SQLite | 레이어 분리, 입력 검증, 인증은 다음 미션으로 분리 |
| B6-3 | Python 3.10+, FastAPI, SQLAlchemy, Jinja2, JWT/Session, python-jose/passlib/bcrypt, Render/Railway | 인증/인가, 비밀번호 해시, OAuth2(보너스), 환경변수 |
| B7-1 | Python, FastAPI, SQLite 권장, AI API, 팀 Git/PR | API Key/DB PW=.env, .gitignore, AI timeout, 입력검증, 이벤트 로그 |
| B7-2 | React Frontend + FastAPI Backend + SQLite/PostgreSQL + AI API + Cloud | 사용자 데이터 소유권, JWT 등 인증, 403/404, Secret 관리, PR-only main |

## 2. 오리엔테이션 기반 단계별 확장

- 입학 연수: AI 도구 적응, 개발환경, Python 기초, 재현성, Peer Review
- AI 도구 학습: Web/React, Python/Git, Cloud/API, Linux/OS, 자료구조, DB/FastAPI
- AI 심화 학습: 데이터 분석, AI 수학, CV, NLP, ML/XAI, 딥러닝, 멀티모달
- AI 응용 학습: 7대 산업 도메인, End-to-End 서비스, MVP, 사업화
- Final: 자율 주제 AI 서비스, 시장·고객 검증, 비즈니스 모델, Demo Day/IR

## 2.1 실습 개발환경

| 구분 | iMac 환경 | Windows 환경 | 공통 목적 |
|---|---|---|---|
| Host | iMac / macOS | Windows 11 Pro | 개발 호스트 |
| Linux Runtime | OrbStack Ubuntu | WSL2 Ubuntu | Mission 실행환경 통일 |
| Backend | FastAPI + Uvicorn | FastAPI + Uvicorn | API / SSR / AI 서비스 |
| ORM | SQLAlchemy | SQLAlchemy | 데이터 접근 계층 |
| Local DB | SQLite / PostgreSQL / MySQL / H2 | SQLite / PostgreSQL / MySQL / H2 | B6 계열과 로컬 검증 |
| Cloud DB | Supabase PostgreSQL | Supabase PostgreSQL | 서비스 확장 |
| DB Tool | TablePlus / DBeaver / DataGrip / CLI | DBeaver / DataGrip / CLI | SQL·스키마·데이터 검증 |

Database 보안 기본선:
- 관리자 계정과 애플리케이션 계정 분리
- 최소권한 Role 사용
- 외부 포트 공개 최소화
- SQLAlchemy ORM 또는 파라미터 바인딩 사용
- 중요 변경 전 백업과 복구 절차 확인

## 2.2 개발환경 18계층 구조

| No. | Layer | 대표 항목 | 구분 |
|---:|---|---|---|
| 01 | Host · OS | Windows 11 Pro, iMac, macOS, Linux | LAB/PDF |
| 02 | Virtualization · Linux Runtime | WSL2, OrbStack, Ubuntu, Docker | LAB/PDF |
| 03 | Runtime · Package Manager | Python, venv, uv, pip, Node.js, npm, Vite | LAB/확장 |
| 04 | Language | HTML, CSS, JavaScript, TypeScript, Python, SQL, Bash | PDF |
| 05 | IDE · CLI | VS Code, Live Server, Terminal, Git, GitHub, curl, Jupyter, kubectl | PDF/LAB/확장 |
| 06 | AI Coding · Agent | Codex, Claude Code, Cursor Composer, Antigravity, MCP | 확장 |
| 07 | Frontend | Vanilla Web, React 18+, React Router | PDF |
| 08 | Backend · API | FastAPI, Uvicorn, Pydantic, Jinja2, REST, JWT/OAuth2 | PDF |
| 09 | Database · ORM | SQLite, PostgreSQL, MySQL, H2, SQLAlchemy, Supabase PostgreSQL | PDF/LAB |
| 10 | Cache · Vector · Search | Mini Redis, Redis, Pinecone, Vector DB, Embedding, RAG | PDF/확장 |
| 11 | Cloud AI · Local AI | OpenAI/Anthropic/Gemini API, Ollama, Llama, Qwen, DeepSeek, Gemma | PDF/확장 |
| 12 | Container · Kubernetes | Docker, Compose, Kubernetes, Pod, Deployment, Service, RBAC | PDF/확장 |
| 13 | Cloud · PaaS · BaaS | AWS, GitHub Pages, Vercel, Netlify, Render, Railway, Supabase, Firebase | PDF/확장 |
| 14 | Automation · MCP | n8n, Make, Webhook, REST API, MCP, AI Agents | 확장 |
| 15 | Testing · Quality | pytest, Unit/Integration/API/Smoke/E2E, Ruff, ESLint, Prettier | LAB/확장 |
| 16 | Observability · Operations | Logging, Health Check, ps/top/htop, Sentry, MLflow, Prometheus/Grafana/OTel | PDF/확장 |
| 17 | Security | AuthN/AuthZ, Secret Scanning, CodeQL, Dependabot, SBOM, Prompt Injection Defense | PDF/확장 |
| 18 | Domain Platform | ROS, Autoware, AWSIM, Gazebo, Isaac Sim, MuJoCo, MIMIC-III, DICOM | PDF |

실습 실행 기준:

```text
Windows 11 Pro / iMac
→ WSL2 / OrbStack
→ Ubuntu
→ FastAPI / React
→ SQLAlchemy / API
→ Database / Cloud
```

## 3. 2026 최신 확장 — 공식 Mission 필수 아님

### Local AI
- Ollama
- Llama 3.1/3.2
- Qwen 2.5
- DeepSeek-R1
- Gemma 3
- Local Embedding / Vector Search

### Agentic Development
- Google Antigravity IDE / Agent / CLI / SDK
- Claude Code
- Codex
- Cursor Composer
- MCP

### Automation
- Make AI Agents
- n8n
- Webhook / REST API orchestration
- MCP Tool integration

### Container / Platform
- Docker
- Kubernetes
- Pod / Deployment / Service
- RBAC / NetworkPolicy / Pod Security Standards
- Managed Kubernetes는 실제 규모·운영 필요가 있을 때 선택

## 4. Security by Default — 2026

### Application / API
- Access Control / Authentication / Authorization
- Input Validation / Output Encoding
- Injection 방지
- HTTPS / Secure Cookie / CORS / CSRF
- Security Logging / Alerting
- Exception Handling

### AI / Agent
- Prompt Injection
- Sensitive Information Disclosure
- Model/Data Supply Chain
- Improper Output Handling
- Excessive Agency
- Tool Allowlist / Human Approval / Sandbox
- RAG·Embedding 데이터 출처와 권한 경계

### Repository / Supply Chain
- .env / Secret Manager
- GitHub Secret Scanning / Push Protection
- Dependency Review / Dependabot
- CodeQL
- SBOM
- SLSA Provenance
- 서명/무결성 검증

### Container / Kubernetes
- Least Privilege RBAC
- Pod Security Standards (Baseline/Restricted)
- runAsNonRoot / no privilege escalation
- CPU/Memory requests & limits
- Seccomp / AppArmor / SELinux
- NetworkPolicy
- Secret encryption at rest + external secret store 고려

## 5. 운영 원칙

1. Mission PASS에 필요한 공식 도구를 먼저 사용한다.
2. Kubernetes·Antigravity·Make·Local LLM 같은 확장은 평가 요구를 방해하지 않는 범위에서 추가한다.
3. Secret은 Repository/Chat/Evidence에 기록하지 않는다.
4. AI Agent에는 최소 권한과 사람 승인 지점을 둔다.
5. 외부 모델로 보낼 데이터와 로컬 모델에서 처리할 데이터를 구분한다.
6. 보안은 마지막 점검이 아니라 설계·코딩·배포 전 단계에 포함한다.
