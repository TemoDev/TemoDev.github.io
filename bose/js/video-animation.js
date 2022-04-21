// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const videoSection = document.querySelector(".video-section");

const videoSectionContent = document.querySelector(".video-section-content");

const vid = document.querySelector(".headphone-video");

const playbackConst = 2000;
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

gsap.from(videoSection, {
  scrollTrigger: {
    trigger: ".video-section",
    pin: true,
    start: "top top",
    end: "bottom top",
    onUpdate: (self) => {
      let scrollPos = self.progress * 15;
      delay += (scrollPos - delay) * accelamount;
      vid.currentTime = delay;
    },
    toggleActions: "play none none reverse",
    scrub: true,
  },
});

gsap.from(videoSectionContent, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".video-section-content-container ",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(vid, {
  opacity: 0,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".video-section",
    start: "top center",
    end: "center center",
    toggleActions: "play none none reverse",
  },
});
