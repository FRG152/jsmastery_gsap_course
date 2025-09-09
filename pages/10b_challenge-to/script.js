import gsap from "gsap";

const toasts = document.querySelectorAll(".toast");

const showToastLoop = () => {
  toasts.forEach((toast, i) => {
    gsap.to(toast, {
      y: -50,
      opacity: 1,
      ease: "power3.out",
      duration: 1,
      delay: i * 2,
      onComplete: () => {
        gsap.to(toast, {
          y: 0,
          opacity: 0,
          ease: "power3.in",
          duration: 1,
        });
      },
    });
  });
};

showToastLoop();
