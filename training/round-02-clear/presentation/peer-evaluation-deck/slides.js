(() => {
  "use strict";

  const sectionLabels = [
    "Mission",
    "Problem & Concepts",
    "Requirement → Implementation",
    "System / Data Flow",
    "Runtime Result",
    "Verification / Evidence",
    "Evaluation Explanation",
  ];

  const updateSectionLabel = () => {
    const index = Reveal.getIndices().h;
    const label = sectionLabels[index] || "B1-1";
    const target = document.querySelector("#deck-section");

    if (target) {
      target.textContent = label;
    }
  };

  const renderMermaid = async () => {
    if (!window.mermaid) {
      return;
    }

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "base",
      fontFamily:
        'Pretendard, "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      themeVariables: {
        primaryColor: "#ffffff",
        primaryTextColor: "#132235",
        primaryBorderColor: "#2f80ed",
        lineColor: "#7890a7",
        secondaryColor: "#edf3f8",
        tertiaryColor: "#f6f8fb",
        fontSize: "20px",
      },
      flowchart: {
        curve: "basis",
        htmlLabels: true,
        nodeSpacing: 22,
        rankSpacing: 28,
        padding: 12,
      },
    });

    await mermaid.run({
      querySelector: ".mermaid",
    });
  };

  const initializeIcons = () => {
    if (window.lucide) {
      lucide.createIcons({
        attrs: {
          "stroke-width": 1.8,
        },
      });
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        return;
      }

      await document.exitFullscreen();
    } catch (error) {
      console.error("Fullscreen toggle failed:", error);
    }
  };

  const fullscreenButton =
    document.querySelector("[data-fullscreen]");

  if (fullscreenButton) {
    fullscreenButton.addEventListener(
      "click",
      toggleFullscreen,
    );
  }

  Reveal.initialize({
    hash: true,
    controls: true,
    controlsTutorial: false,
    progress: true,
    slideNumber: "c/t",
    transition: "fade",
    backgroundTransition: "fade",
    navigationMode: "linear",
    center: false,
    width: 1600,
    height: 900,
    margin: 0.025,
    minScale: 0.2,
    maxScale: 2,
    pdfSeparateFragments: false,
    plugins: [
      RevealHighlight,
      RevealNotes,
      RevealZoom,
    ],
  }).then(async () => {
    await renderMermaid();
    initializeIcons();
    updateSectionLabel();
  });

  Reveal.on("slidechanged", () => {
    updateSectionLabel();
    initializeIcons();
  });

  Reveal.on("ready", () => {
    initializeIcons();
    updateSectionLabel();
  });
})();
