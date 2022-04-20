// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const videoSection = document.querySelector(".video-section");

const videoSectionContent = document.querySelector(".video-section-content");

const vid = document.querySelector(".headphone-video");

const playbackConst = 2000;
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

gsap.to(videoSection, {
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
    // markers: true,
    toggleActions: "play none none reverse",
    scrub: true,
  },
});

gsap.from(videoSectionContent, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".video-section",
    // markers: true,
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(vid, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".video-section",
    markers: true,
    start: "top 30%",
    end: "center center",
    toggleActions: "play none none reverse",
  },
});
