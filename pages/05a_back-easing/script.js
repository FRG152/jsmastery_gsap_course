import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const tabRow = document.querySelector(".tab-row");
const indicator = document.querySelector(".indicator");

const updateIndicitor = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator, {
    width: width,
    duration: 0.5,
    x: offset,
    ease: "back.out(1.7)",
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateIndicitor(tab);
  });
});
