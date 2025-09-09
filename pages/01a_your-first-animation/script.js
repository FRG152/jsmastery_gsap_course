gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 1,
  onComplete: () => {
    // gspa.to(".card", {
    //   y: -20,
    //   repeat: -1,
    //   yoyo: true,
    //   duration: 1,
    // });

    gsap.to(".card", {
      repeat: -1,
      yoyo: true,
      duration: 1,
      boxShadow: "0 10px 10px rgba(29, 209, 161, 0.6)",
    });
  },
});
