const header = document.querySelector("[data-header]");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const recommendations = {
  document: {
    title: "바빠 보고서 작성법 기초",
    copy: "작년 문서를 고치는 대신, 빈 화면에서 초안을 잡는 순서를 익힙니다.",
  },
  ai: {
    title: "AI 왕기초 활용법",
    copy: "어려운 용어를 건너뛰고 실제 업무 문장 하나로 시작합니다.",
  },
  contract: {
    title: "기초부터 탄탄한 물품 계약",
    copy: "급식과 교복처럼 현장에서 자주 만나는 사례로 계약 흐름을 잡습니다.",
  },
  coding: {
    title: "교행 업무에 활용하는 실전 바이브코딩",
    copy: "개발자가 아니어도 반복 업무를 작은 도구로 바꾸는 과정을 따라 합니다.",
  },
};

const resultTitle = document.querySelector("[data-result-title]");
const resultCopy = document.querySelector("[data-result-copy]");

document.querySelectorAll(".chooser-tab").forEach((button) => {
  button.addEventListener("click", () => {
    const recommendation = recommendations[button.dataset.path];
    if (!recommendation || !resultTitle || !resultCopy) return;

    document.querySelectorAll(".chooser-tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-pressed", String(active));
    });

    resultTitle.textContent = recommendation.title;
    resultCopy.textContent = recommendation.copy;
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
    { threshold: 0.12, rootMargin: "0px 0px -28px" },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
