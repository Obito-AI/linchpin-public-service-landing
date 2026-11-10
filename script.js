const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobile-nav");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const closeMenu = () => {
  if (!menuButton || !mobileNav || !header) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "메뉴 열기";
  mobileNav.hidden = true;
  header.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.querySelector(".sr-only").textContent = isOpen ? "메뉴 열기" : "메뉴 닫기";
  mobileNav.hidden = isOpen;
  header?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const paths = {
  ai: {
    title: "AI 왕기초 활용법",
    description: "어려운 용어보다 실제 업무 문장으로 시작합니다. AI를 처음 쓰는 공무원에게 맞는 순서입니다.",
  },
  document: {
    title: "바빠 보고서 작성법 기초",
    description: "빈 화면에서 시작해 검토 가능한 초안으로 가는 과정을 익힙니다. 보고서와 발표 자료에 바로 연결됩니다.",
  },
  practice: {
    title: "기초부터 탄탄한 물품 계약",
    description: "급식과 교복처럼 현장에서 자주 만나는 사례로 계약의 흐름을 잡습니다.",
  },
  coding: {
    title: "교행 업무에 활용하는 실전 바이브코딩",
    description: "개발자가 아니어도 반복 업무를 작은 도구로 바꾸는 과정을 실제 사례로 배웁니다.",
  },
};

const resultTitle = document.querySelector("[data-result-title]");
const resultDescription = document.querySelector("[data-result-description]");

document.querySelectorAll(".finder-option").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPath = paths[button.dataset.path];
    if (!selectedPath || !resultTitle || !resultDescription) return;

    document.querySelectorAll(".finder-option").forEach((option) => {
      const isSelected = option === button;
      option.classList.toggle("is-active", isSelected);
      option.setAttribute("aria-pressed", String(isSelected));
    });

    resultTitle.textContent = selectedPath.title;
    resultDescription.textContent = selectedPath.description;
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px" },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
