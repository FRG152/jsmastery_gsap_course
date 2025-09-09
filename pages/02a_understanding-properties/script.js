import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  background: "#ddd",
  borderRadius: "100%",
  scale: 1.25,
  duration: 2,
  delay: 0.5,
  ease: "elastic.in",
  repeat: -1,
  yoyo: true,
  //   repeatDelay: 2,
  //   paused: true,
  //   stagger: 1
});
