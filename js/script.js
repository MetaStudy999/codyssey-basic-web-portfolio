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
  if (window.innerWidth >= 768 && state.menuOpen) {
    setMenuOpen(false);
  }
};

/* ---------------------------------
   GitHub Projects API
--------------------------------- */

const GITHUB_USERNAME = "MetaStudy999";

const projectsStatus =
  document.querySelector("#projects-status");

const projectsGrid =
  document.querySelector("#projects-grid");

const reloadProjectsButton =
  document.querySelector("#reload-projects");

state.projects = {
  status: "idle",
  items: [],
  error: "",
};

const createProjectCard = (repository) => {
  const {
    name,
    description,
    stargazers_count: stars,
    language,
    html_url: url,
  } = repository;

  const article =
    document.createElement("article");

  article.classList.add("project-card");

  const title =
    document.createElement("h3");

  title.textContent = name;

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

  const link =
    document.createElement("a");

  link.classList.add("project-link");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "GitHub에서 보기";

  article.append(
    title,
    descriptionElement,
    meta,
    link,
  );

  return article;
};

const renderProjects = () => {
  const {
    status,
    items,
    error,
  } = state.projects;

  projectsGrid.replaceChildren();

  reloadProjectsButton.disabled =
    status === "loading";

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
    const visibleItems = items.slice(0, 8);

    projectsStatus.innerHTML =
      `<span><strong>${items.length}</strong>개의 공개 프로젝트 중 <strong>${visibleItems.length}</strong>개를 표시했습니다.</span>`;

    const cards = visibleItems
      .map((repository) =>
        createProjectCard(repository),
      );

    cards.forEach((card) => {
      projectsGrid.append(card);
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
  });

  try {
    const url =
      `https://api.github.com/users/` +
      `${encodeURIComponent(GITHUB_USERNAME)}` +
      `/repos?sort=updated&per_page=30`;

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
    "입력이 정상적으로 확인되었습니다.";

  formResult.classList.add("is-success");
};

/* ---------------------------------
   Initialization
--------------------------------- */

const initializeApp = () => {
  state.theme = getSavedTheme();

  renderTheme();
  renderMenu();
  renderScrollUi();
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
    renderScrollUi,
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
