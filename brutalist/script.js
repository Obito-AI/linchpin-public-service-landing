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

const title = document.querySelector("[data-result-title]");
const copy = document.querySelector("[data-result-copy]");

document.querySelectorAll(".picker-button").forEach((button) => {
  button.addEventListener("click", () => {
    const result = recommendations[button.dataset.path];
    if (!result || !title || !copy) return;

    document.querySelectorAll(".picker-button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    title.textContent = result.title;
    copy.textContent = result.copy;
  });
});
