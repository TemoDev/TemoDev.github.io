gsap.registerPlugin(ScrollTrigger);
const featuresTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".features",
    start: "top center",
    // markers: true,
    scrub: true,
    toggleActions: "play none none reverse",
  },
});

featuresTl
  .from(".feature-img", { y: "-5%" }, 0)
  .fromTo(".feature-content", { y: "30%" }, { y: "-10%" }, 0);
