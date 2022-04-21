gsap.registerPlugin(ScrollTrigger);

const noiseTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".noise-cancelling-section",
    start: "center center",
    end: "bottom center",
    scrub: true,
    pin: true,
  },
});

noiseTl
  .from(".noise-cancelling-img", {
    opacity: 0,
  })
  .to(
    "#noise-cancelling-title",
    {
      "stroke-dashoffset": 0,
    },
    0.15
  )
  .from(
    ".noise-cancellation-svg path",
    {
      opacity: "0",
    },
    0.15
  );
