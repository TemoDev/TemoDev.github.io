// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const secondSectionTl = gsap.timeline({
  ease: "none",
  scrollTrigger: {
    trigger: ".section-img",
    start: "top bottom",
    scrub: true,
  },
});

secondSectionTl
  .to(".section-img", {
    transform: "scale(1)",
    duration: 1,
  })
  .from(
    ".section-content",
    {
      opacity: 0,
      y: "-60%",
    },
    0
  );
