import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power1.in",
        onComplete: () => {
          setTimeout(showToastLoop, 2500);
        },
      });
    },
  });
};

showToastLoop();
