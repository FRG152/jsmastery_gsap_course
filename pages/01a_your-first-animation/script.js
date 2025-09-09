gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 1,
  onComplete: () => {
    gspa.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
