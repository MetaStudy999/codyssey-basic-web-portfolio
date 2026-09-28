"use strict";

/* ---------------------------------
   Constants
--------------------------------- */

const NAV_SCROLL_THRESHOLD = 60;
const SCROLL_TOP_THRESHOLD = 300;
const OBSERVER_THRESHOLD = 0.2;
const THEME_STORAGE_KEY = "portfolio-theme";

/* ---------------------------------
   State
--------------------------------- */

const state = {
  menuOpen: false,
  theme: "light",
};

/* ---------------------------------
   DOM
--------------------------------- */

const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const navSections = Array.from(navLinks)
  .map((link) =>
    document.querySelector(
      link.getAttribute("href"),
    ),
  )
  .filter(Boolean);
const themeToggle = document.querySelector("#theme-toggle");
const scrollTopButton = document.querySelector("#scroll-top");
const revealSections = document.querySelectorAll(".section");

/* ---------------------------------
   Theme
--------------------------------- */

const getSavedTheme = () => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "light";
};

const renderTheme = () => {
  document.documentElement.dataset.theme = state.theme;

  const isDark = state.theme === "dark";

  themeToggle.textContent = isDark
    ? "Light"
    : "Dark";

  themeToggle.setAttribute(
    "aria-label",
    isDark
      ? "라이트 모드로 전환"
      : "다크 모드로 전환",
  );
};

const setTheme = (theme) => {
  state.theme = theme;

  localStorage.setItem(
    THEME_STORAGE_KEY,
    state.theme,
  );

  renderTheme();
};

const toggleTheme = () => {
  const nextTheme =
    state.theme === "dark"
      ? "light"
      : "dark";

  setTheme(nextTheme);
};

/* ---------------------------------
   Mobile menu
--------------------------------- */

const renderMenu = () => {
  navMenu.classList.toggle(
    "active",
    state.menuOpen,
  );

  menuToggle.setAttribute(
    "aria-expanded",
    String(state.menuOpen),
  );

  menuToggle.setAttribute(
    "aria-label",
    state.menuOpen
      ? "메뉴 닫기"
      : "메뉴 열기",
  );
};

const setMenuOpen = (isOpen) => {
  state.menuOpen = isOpen;
  renderMenu();
};

const toggleMenu = () => {
  setMenuOpen(!state.menuOpen);
};

/* ---------------------------------
   Smooth scroll
--------------------------------- */

const handleNavLinkClick = (event) => {
  const href = event.currentTarget.getAttribute("href");

  if (!href || !href.startsWith("#")) {
    return;
  }

  const target = document.querySelector(href);

  if (!target) {
    return;
  }

  event.preventDefault();

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setMenuOpen(false);
};

/* ---------------------------------
   Initial scroll position
--------------------------------- */

const resetInitialScrollPosition = (event) => {
  if (window.location.hash) {
    return;
  }

  const navigationEntry =
    performance.getEntriesByType(
      "navigation",
    )[0];

  const isBackForward =
    event?.persisted ||
    navigationEntry?.type ===
      "back_forward";

  if (isBackForward) {
    return;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
};

/* ---------------------------------
   Scroll UI
--------------------------------- */

const renderScrollUi = () => {
  const scrollY = window.scrollY;

  siteHeader.classList.toggle(
    "scrolled",
    scrollY >= NAV_SCROLL_THRESHOLD,
  );

  scrollTopButton.classList.toggle(
    "visible",
    scrollY >= SCROLL_TOP_THRESHOLD,
  );
};

const renderActiveNav = () => {
  const headerOffset =
    siteHeader.offsetHeight + 24;

  let activeId = "home";

  navSections.forEach((section) => {
    if (
      section.offsetTop <=
      window.scrollY + headerOffset
    ) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive =
      link.getAttribute("href") ===
      `#${activeId}`;

    if (isActive) {
      link.setAttribute(
        "aria-current",
        "location",
      );
    } else {
      link.removeAttribute(
        "aria-current",
      );
    }
  });
};

const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/* ---------------------------------
   Scroll reveal
--------------------------------- */

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add(
        "is-visible",
      );

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: OBSERVER_THRESHOLD,
  },
);

const initializeReveal = () => {
  revealSections.forEach((section) => {
    section.classList.add("reveal");
    revealObserver.observe(section);
  });
};

/* ---------------------------------
   Resize
--------------------------------- */

const handleResize = () => {
  renderActiveNav();

  if (window.innerWidth >= 768 && state.menuOpen) {
    setMenuOpen(false);
  }

  if (state.projects?.status === "success") {
    renderProjects();
  }
};

/* ---------------------------------
   GitHub Projects API
--------------------------------- */

const GITHUB_USERNAME = "MetaStudy999";

const currentMissionSummary =
  document.querySelector(
    "#current-mission-summary",
  );

const projectsCategories =
  document.querySelector("#projects-categories");

const projectCategoryButtons =
  document.querySelectorAll(
    "[data-project-category]",
  );

const projectsStatus =
  document.querySelector("#projects-status");

const projectsCategoryMessage =
  document.querySelector(
    "#projects-category-message",
  );

const projectsGrid =
  document.querySelector("#projects-grid");

const reloadProjectsButton =
  document.querySelector("#reload-projects");

const projectsPagination =
  document.querySelector("#projects-pagination");


state.projects = {
  status: "idle",
  items: [],
  error: "",
  page: 1,
  category: "all",
};

const CURRENT_MISSION_ID = "B1-1";

const MISSION_PROGRESS = {
  "B1-1": "진행",
  "B1-2": "준비",
  "B2-1": "준비",
  "B2-2": "준비",
  "B3-1": "준비",
  "B3-2": "준비",
  "B4-1": "준비",
  "B4-2": "준비",
  "B5-1": "준비",
  "B5-2": "준비",
  "B6-1": "준비",
  "B6-2": "준비",
  "B6-3": "준비",
  "B7-1": "준비",
  "B7-2": "준비",
  "공통": "진행",
};

const MISSION_REPOSITORY_MAP = {
  "codyssey-basic-web-portfolio": {
    missionId: "B1-1",
    title: "나를 소개하는 웹페이지 처음부터 만들기",
    order: 101,
  },
  "codyssey-basic-react-spa": {
    missionId: "B1-2",
    title: "버튼 누르면 화면이 스르르 바뀌는 요즘 웹사이트 만들기",
    order: 102,
  },
  "codyssey-basic-budget-tracker": {
    missionId: "B2-1",
    title: "나만의 용돈 기입장 프로그램 만들기",
    order: 201,
  },
  "codyssey-basic-git-collaboration": {
    missionId: "B2-2",
    title: "친구 3~5명과 함께 프로그램 만드는 법 연습하기",
    order: 202,
  },
  "codyssey-basic-cloud-infrastructure": {
    missionId: "B3-1",
    title: "내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기",
    order: 301,
  },
  "codyssey-basic-ai-git-assistant": {
    missionId: "B3-2",
    title: "내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기",
    order: 302,
  },
  "codyssey-basic-system-monitor": {
    missionId: "B4-1",
    title: "컴퓨터가 알아서 자기 상태를 점검하게 만들기",
    order: 401,
  },
  "codyssey-basic-system-troubleshooting": {
    missionId: "B4-2",
    title: "컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기",
    order: 402,
  },
  "codyssey-basic-mini-redis": {
    missionId: "B5-1",
    title: "정보를 엄청 빠르게 찾아주는 작은 저장소 만들기",
    order: 501,
  },
  "codyssey-basic-mini-git": {
    missionId: "B5-2",
    title: "파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기",
    order: 502,
  },
  "codyssey-basic-sql-database": {
    missionId: "B6-1",
    title: "정보를 깔끔하게 정리하는 디지털 서랍장 만들기",
    order: 601,
  },
  "codyssey-basic-fastapi-crud": {
    missionId: "B6-2",
    title: "글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기",
    order: 602,
  },
  "codyssey-basic-fastapi-auth": {
    missionId: "B6-3",
    title: "로그인이 되고 회원끼리 연결되는 웹 서비스 만들기",
    order: 603,
  },
  "codyssey-basic-ai-chatbot": {
    missionId: "B7-1",
    title: "웹 기반 AI 챗봇 서비스 개발 프로젝트",
    order: 701,
  },
  "codyssey-basic-ai-chatbot-fullstack": {
    missionId: "B7-2",
    title: "웹 기반 AI 챗봇 서비스 고도화 프로젝트",
    order: 702,
  },
  "codyssey-basic": {
    missionId: "공통",
    title: "CODYSSEY 공통 학습 기준",
    order: 999,
  },
};

const getMissionMeta = (name) =>
  MISSION_REPOSITORY_MAP[name] ?? {
    missionId: "미지정",
    title: name,
    order: 9999,
  };

const getMissionStatus = (missionId) =>
  MISSION_PROGRESS[missionId] ?? "준비";

const getMissionStatusClass = (status) => {
  if (status === "완료") return "mission-status-complete";
  if (status === "진행") return "mission-status-progress";
  return "mission-status-ready";
};

const compareMissionRepositories = (a, b) => {
  const left = getMissionMeta(a.name);
  const right = getMissionMeta(b.name);

  if (left.order !== right.order) {
    return left.order - right.order;
  }

  return a.name.localeCompare(b.name, "ko");
};

const renderCurrentMissionSummary = () => {
  currentMissionSummary.replaceChildren();

  const label = document.createElement("span");
  label.classList.add("current-mission-label");
  label.textContent = "Portfolio 정리 현황";

  const mission = document.createElement("span");
  mission.classList.add("mission-id-badge");
  mission.textContent = CURRENT_MISSION_ID;

  const currentStatus =
    getMissionStatus(CURRENT_MISSION_ID);

  const status = document.createElement("span");
  status.classList.add(
    "mission-status-badge",
    getMissionStatusClass(currentStatus),
  );
  status.textContent = currentStatus;

  currentMissionSummary.append(
    label,
    mission,
    status,
  );
};

const PROJECT_CATEGORY_CONFIG = {
  all: {
    label: "전체",
    mode: "repositories",
  },
  admission: {
    label: "1. 입학 연수",
    mode: "message",
    message: "레포 준비중",
  },
  tools: {
    label: "2. AI 도구 학습",
    mode: "repositories",
  },
  advanced: {
    label: "3. AI 심화 학습",
    mode: "message",
    message: "예정",
  },
  applied: {
    label: "4. AI 응용 학습",
    mode: "message",
    message: "예정",
  },
  final: {
    label: "5. 파이널 프로젝트",
    mode: "message",
    message: "예정",
  },
};

const isToolLearningRepository =
  (repository) =>
    repository.name
      .toLowerCase()
      .startsWith("codyssey-basic");

const getProjectsForCategory = () => {
  const { items, category } =
    state.projects;

  if (
    category === "all" ||
    category === "tools"
  ) {
    return items
      .filter(isToolLearningRepository)
      .sort(compareMissionRepositories);
  }

  return [];
};

const renderProjectCategoryTabs = () => {
  projectCategoryButtons.forEach(
    (button) => {
      const isActive =
        button.dataset.projectCategory ===
        state.projects.category;

      button.setAttribute(
        "aria-selected",
        String(isActive),
      );
    },
  );
};

const setProjectCategory = (category) => {
  if (!PROJECT_CATEGORY_CONFIG[category]) {
    return;
  }

  state.projects.category = category;
  state.projects.page = 1;
  renderProjects();
};

const handleProjectCategoryClick =
  (event) => {
    setProjectCategory(
      event.currentTarget.dataset
        .projectCategory,
    );
  };

const getProjectsPerPage = () => {
  if (window.innerWidth >= 1024) {
    return 9;
  }

  if (window.innerWidth >= 768) {
    return 6;
  }

  return 4;
};

const setProjectsPage = (page) => {
  state.projects.page = page;
  renderProjects();
};

const createProjectPageButton = ({
  label,
  page,
  disabled = false,
  current = false,
  ariaLabel,
}) => {
  const button =
    document.createElement("button");

  button.classList.add(
    "projects-page-button",
  );

  button.type = "button";
  button.textContent = label;
  button.disabled = disabled;
  button.setAttribute(
    "aria-label",
    ariaLabel,
  );

  if (current) {
    button.setAttribute(
      "aria-current",
      "page",
    );
  }

  button.addEventListener(
    "click",
    () => setProjectsPage(page),
  );

  return button;
};

const renderProjectsPagination = ({
  currentPage,
  totalPages,
}) => {
  projectsPagination.replaceChildren();

  if (totalPages <= 1) {
    return;
  }

  projectsPagination.append(
    createProjectPageButton({
      label: "이전",
      page: currentPage - 1,
      disabled: currentPage === 1,
      ariaLabel: "이전 프로젝트 페이지",
    }),
  );

  for (
    let page = 1;
    page <= totalPages;
    page += 1
  ) {
    projectsPagination.append(
      createProjectPageButton({
        label: String(page),
        page,
        current: page === currentPage,
        ariaLabel: `프로젝트 ${page} 페이지`,
      }),
    );
  }

  projectsPagination.append(
    createProjectPageButton({
      label: "다음",
      page: currentPage + 1,
      disabled: currentPage === totalPages,
      ariaLabel: "다음 프로젝트 페이지",
    }),
  );
};

const createProjectPlaceholder = () => {
  const placeholder =
    document.createElement("article");

  placeholder.classList.add(
    "project-card",
    "project-card-placeholder",
  );

  placeholder.setAttribute(
    "aria-hidden",
    "true",
  );

  return placeholder;
};

const createProjectCard = (repository) => {
  const {
    name,
    description,
    stargazers_count: stars,
    language,
    html_url: url,
    homepage,
    has_pages: hasPages,
    owner,
  } = repository;

  const article =
    document.createElement("article");

  article.classList.add("project-card");

  const {
    missionId,
    title: missionTitle,
  } = getMissionMeta(name);

  const missionStatus =
    getMissionStatus(missionId);

  if (missionId === CURRENT_MISSION_ID) {
    article.classList.add(
      "is-current-mission",
    );
  }

  const cardHeader =
    document.createElement("div");
  cardHeader.classList.add(
    "project-card-header",
  );

  const missionBadge =
    document.createElement("span");
  missionBadge.classList.add(
    "mission-id-badge",
  );
  missionBadge.textContent = missionId;

  const statusBadge =
    document.createElement("span");
  statusBadge.classList.add(
    "mission-status-badge",
    getMissionStatusClass(
      missionStatus,
    ),
  );
  statusBadge.textContent = missionStatus;

  cardHeader.append(
    missionBadge,
    statusBadge,
  );

  const title =
    document.createElement("h3");

  title.textContent = missionTitle;

  const repositoryName =
    document.createElement("p");

  repositoryName.classList.add(
    "project-repository-name",
  );

  repositoryName.textContent = name;

  const descriptionElement =
    document.createElement("p");

  descriptionElement.textContent =
    description ||
    "설명이 등록되지 않은 저장소입니다.";

  const meta =
    document.createElement("p");

  meta.classList.add("project-meta");

  meta.textContent =
    `★ ${stars} · ${language || "Language 미지정"}`;

  const actions =
    document.createElement("div");

  actions.classList.add("project-actions");

  const ownerLogin =
    owner?.login ?? GITHUB_USERNAME;

  const pagesUrl =
    hasPages
      ? (
          name.toLowerCase() ===
          `${ownerLogin.toLowerCase()}.github.io`
            ? `https://${ownerLogin}.github.io/`
            : `https://${ownerLogin}.github.io/${name}/`
        )
      : "";

  const websiteUrl =
    homepage?.trim() || pagesUrl;

  const createProjectLink = ({
    label,
    href,
  }) => {
    if (
      !href ||
      !/^https?:\/\//i.test(href)
    ) {
      return null;
    }

    const link =
      document.createElement("a");

    link.classList.add(
      "project-action-link",
    );

    link.href = href;
    link.target = "_blank";
    link.rel =
      "noopener noreferrer";
    link.textContent = label;

    return link;
  };

  const githubAction =
    createProjectLink({
      label: "깃허브",
      href: url,
    });

  const websiteAction =
    createProjectLink({
      label: "웹페이지",
      href: websiteUrl,
    });

  if (githubAction) {
    actions.append(githubAction);
  }

  if (githubAction && websiteAction) {
    const separator =
      document.createElement("span");

    separator.classList.add(
      "project-action-separator",
    );

    separator.textContent = "|";
    separator.setAttribute(
      "aria-hidden",
      "true",
    );

    actions.append(separator);
  }

  if (websiteAction) {
    actions.append(websiteAction);
  }

  article.append(
    cardHeader,
    title,
    repositoryName,
    descriptionElement,
    meta,
    actions,
  );

  return article;
};

const renderProjects = () => {
  const {
    status,
    items,
    error,
    category,
  } = state.projects;

  const categoryConfig =
    PROJECT_CATEGORY_CONFIG[category];

  renderProjectCategoryTabs();

  projectsGrid.replaceChildren();
  projectsPagination.replaceChildren();
  projectsCategoryMessage.hidden = true;
  projectsCategoryMessage
    .replaceChildren();

  reloadProjectsButton.hidden =
    categoryConfig.mode !== "repositories";

  reloadProjectsButton.disabled =
    status === "loading";

  if (categoryConfig.mode === "message") {
    projectsStatus.innerHTML =
      `<span><strong>${categoryConfig.label}</strong> · ${categoryConfig.message}</span>`;

    const content =
      document.createElement("div");

    const title =
      document.createElement("strong");

    title.textContent =
      categoryConfig.label;

    const message =
      document.createElement("span");

    message.textContent =
      categoryConfig.message;

    content.append(
      title,
      message,
    );

    projectsCategoryMessage.append(
      content,
    );

    projectsCategoryMessage.hidden = false;
    return;
  }

  if (status === "loading") {
    projectsStatus.textContent =
      "프로젝트를 불러오는 중입니다.";

    reloadProjectsButton.textContent =
      "불러오는 중...";

    return;
  }

  reloadProjectsButton.textContent =
    status === "error"
      ? "다시 시도"
      : "프로젝트 다시 불러오기";

  if (status === "error") {
    projectsStatus.textContent =
      error ||
      "프로젝트를 불러올 수 없습니다.";

    return;
  }

  if (status === "empty") {
    projectsStatus.textContent =
      "표시할 프로젝트가 없습니다.";

    return;
  }

  if (status === "success") {
    const categoryItems =
      getProjectsForCategory();

    if (categoryItems.length === 0) {
      projectsStatus.innerHTML =
        `<span><strong>${categoryConfig.label}</strong> · 표시할 레포가 없습니다.</span>`;
      return;
    }

    const perPage = getProjectsPerPage();

    const totalPages =
      Math.max(
        1,
        Math.ceil(
          categoryItems.length / perPage,
        ),
      );

    const currentPage =
      Math.min(
        state.projects.page,
        totalPages,
      );

    state.projects.page = currentPage;

    const startIndex =
      (currentPage - 1) * perPage;

    const endIndex =
      Math.min(
        startIndex + perPage,
        categoryItems.length,
      );

    const visibleItems =
      categoryItems.slice(
        startIndex,
        endIndex,
      );

    projectsStatus.innerHTML =
      `<span><strong>${categoryConfig.label}</strong> · <strong>${categoryItems.length}</strong>개 레포 중 <strong>${startIndex + 1}–${endIndex}</strong>번째를 표시했습니다. (${currentPage}/${totalPages} 페이지)</span>`;

    const cards = visibleItems
      .map((repository) =>
        createProjectCard(repository),
      );

    cards.forEach((card) => {
      projectsGrid.append(card);
    });

    const missingSlots =
      perPage - visibleItems.length;

    for (
      let slot = 0;
      slot < missingSlots;
      slot += 1
    ) {
      projectsGrid.append(
        createProjectPlaceholder(),
      );
    }

    renderProjectsPagination({
      currentPage,
      totalPages,
    });

    return;
  }

  projectsStatus.textContent =
    "프로젝트를 불러올 준비가 되었습니다.";
};

const setProjectsState = (nextState) => {
  state.projects = {
    ...state.projects,
    ...nextState,
  };

  renderProjects();
};

const loadProjects = async () => {
  setProjectsState({
    status: "loading",
    items: [],
    error: "",
    page: 1,
  });

  try {
    const url =
      `https://api.github.com/users/` +
      `${encodeURIComponent(GITHUB_USERNAME)}` +
      `/repos?sort=updated&per_page=100`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error(
          "GitHub API 요청 한도를 초과했습니다. 잠시 후 다시 시도해 주세요.",
        );
      }

      throw new Error(
        `GitHub API 응답 오류: ${response.status}`,
      );
    }

    const repositories =
      await response.json();

    const publicRepositories =
      repositories.filter(
        (repository) => !repository.fork,
      );

    setProjectsState({
      status:
        publicRepositories.length === 0
          ? "empty"
          : "success",
      items: publicRepositories,
      error: "",
    });
  } catch (error) {
    console.error(error);

    setProjectsState({
      status: "error",
      items: [],
      error:
        error.message ||
        "프로젝트를 불러올 수 없습니다. 다시 시도해 주세요.",
    });
  }
};

/* ---------------------------------
   Contact form
--------------------------------- */

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const formResult = document.querySelector("#form-result");

state.form = {
  name: "",
  email: "",
  message: "",
  errors: {},
};

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const updateFormState = () => {
  state.form.name = nameInput.value;
  state.form.email = emailInput.value;
  state.form.message = messageInput.value;
};

const validateForm = () => {
  const errors = {};

  if (!state.form.name.trim()) {
    errors.name = "이름을 입력해 주세요.";
  }

  if (!state.form.email.trim()) {
    errors.email = "이메일을 입력해 주세요.";
  } else if (!EMAIL_PATTERN.test(state.form.email)) {
    errors.email =
      "올바른 이메일 형식을 입력해 주세요.";
  }

  if (!state.form.message.trim()) {
    errors.message = "메시지를 입력해 주세요.";
  }

  state.form.errors = errors;

  return Object.keys(errors).length === 0;
};

const renderFormErrors = () => {
  nameError.textContent =
    state.form.errors.name ?? "";

  emailError.textContent =
    state.form.errors.email ?? "";

  messageError.textContent =
    state.form.errors.message ?? "";
};

const clearFormResult = () => {
  formResult.textContent = "";
  formResult.classList.remove(
    "is-error",
    "is-success",
  );
};

const handleFormInput = () => {
  updateFormState();
  validateForm();
  renderFormErrors();
  clearFormResult();
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  updateFormState();

  const isValid = validateForm();

  renderFormErrors();

  formResult.classList.remove(
    "is-error",
    "is-success",
  );

  if (!isValid) {
    formResult.textContent =
      "입력 내용을 다시 확인해 주세요.";

    formResult.classList.add("is-error");
    return;
  }

  formResult.textContent =
    "입력 내용을 확인했습니다. 현재는 실제 메시지를 전송하지 않는 UI 데모입니다.";

  formResult.classList.add("is-success");
};

/* ---------------------------------
   Initialization
--------------------------------- */

const initializeApp = () => {
  resetInitialScrollPosition();
  state.theme = getSavedTheme();

  renderTheme();
  renderMenu();
  renderScrollUi();
  renderActiveNav();
  renderCurrentMissionSummary();
  initializeReveal();

  menuToggle.addEventListener(
    "click",
    toggleMenu,
  );

  themeToggle.addEventListener(
    "click",
    toggleTheme,
  );

  scrollTopButton.addEventListener(
    "click",
    handleScrollTop,
  );

  navLinks.forEach((link) => {
    link.addEventListener(
      "click",
      handleNavLinkClick,
    );
  });

  window.addEventListener(
    "scroll",
    () => {
      renderScrollUi();
      renderActiveNav();
    },
  );

  projectCategoryButtons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        handleProjectCategoryClick,
      );
    },
  );

  reloadProjectsButton.addEventListener(
    "click",
    loadProjects,
  );

  loadProjects();

  nameInput.addEventListener(
    "input",
    handleFormInput,
  );

  emailInput.addEventListener(
    "input",
    handleFormInput,
  );

  messageInput.addEventListener(
    "input",
    handleFormInput,
  );

  contactForm.addEventListener(
    "submit",
    handleFormSubmit,
  );

  window.addEventListener(
    "resize",
    handleResize,
  );
};

initializeApp();
