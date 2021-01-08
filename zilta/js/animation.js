const tl = gsap.timeline({defaults: { ease: "power3.out", duration: 1}});

const introVideo = CSSRulePlugin.getRule(".intro-video::before");
const aboutTitle = CSSRulePlugin.getRule(".about-title::after");
const productsTitle = CSSRulePlugin.getRule(".products-title::after");
const galleryTitle = CSSRulePlugin.getRule(".gallery-title::after");
const currentTitle = CSSRulePlugin.getRule(".currentProject-title::after");
const contactTitle = CSSRulePlugin.getRule(".contact-title::after");

tl.from('nav', {
    y: '-150%'
})
.from('.intro-title',{
    x: '-100%'
}, '-=.3')
.from('.intro-sup',{
    x: '-100%'
}, '-=.8')
.from('.intro-btn',{
    x: '-150%'
}, '-=.8')
.from(introVideo,{
    cssRule:{
        scaleY: 0,
    }
}, '-=.8')
.from('.intro-video video',{
    x: '-150%'
}, '-=.8')

const aboutTl = gsap.timeline({defaults: { ease: "power3.out", duration: 1}});

aboutTl
.from('.about-title',{
    x: '-100%'
})
.from(aboutTitle,{
    cssRule:{
        scaleX: 0,
    },
    ease: "back.out(1.7)",
}, '-=.5')
.from('.section-text',{
    y: '40%',
    opacity: 0
}, '-=.5')

.from('.about-imgCol',{
    opacity: 0
}, '-=.5')

ScrollTrigger.create({
    trigger: '.container-about',
    animation: aboutTl,
    start:'-20% 50%',
    end:'bottom bottom',
    scrub:2,
})

const productsTl = gsap.timeline({defaults: { ease: "power3.out", duration: 1}}); 

productsTl
.from('.products-title',{
    y: '-100%'
}, '-=.8')
.from(productsTitle,{
    cssRule:{
        scaleX: 0,
    },
    ease: "back.out(1.7)",
}, '-=.8')
.from('.swiper-slide',{
    opacity: 0,
    stagger: .5
})

ScrollTrigger.create({
    trigger: '.products-container',
    animation: productsTl,
    start:'-20% 50%',
    end:'bottom bottom',
    scrub:2
})


const galleryTl = gsap.timeline({defaults: { ease: "power3.out", duration: 1}}); 

galleryTl
.from('.gallery-title',{
    y: '-100%'
}, '-=.8')
.from(galleryTitle,{
    cssRule:{
        scaleX: 0,
    },
    ease: "back.out(1.7)",
}, '-=.8')
.from('.gallery-img',{
    opacity: 0,
    stagger: .5
})

ScrollTrigger.create({
    trigger: '.gallery-con',
    animation: galleryTl,
    start:'-20% 20%',
    end:'top 50%',
    scrub:2
})

const currentTl = gsap.timeline({defaults: { ease: "power3.out", duration: 1}}); 

currentTl
.from('.currentProject-title',{
    x: '-100%'
}, '-=.8')
.from(currentTitle,{
    cssRule:{
        scaleX: 0,
    },
    ease: "back.out(1.7)",
}, '-=.5')
.from('.currentProject-img', {
    opacity: 0,
    stagger: .8
})
.from('.currentProject-content', {
    opacity: 0,
    stagger: .8
})

gsap.to(".currentProject-content", {
    yPercent: -70,
    ease: "none",
    scrollTrigger: {
      trigger: ".currentProject-container",
      start: "top 80%", // the default values
      end: "bottom top",
      scrub: true,
      markers:true
    }, 
  });

ScrollTrigger.create({
    trigger: '.currentProject-container',
    animation: currentTl,
    start:'-20% top',
    end:'top 50%',
    scrub:2,
})


const contactTl = gsap.timeline({defaults: { ease: "power3.out", duration: 1}}); 

contactTl
.from('.contact-title',{
    x: '-100%'
}, '-=.8')
.from(contactTitle, {
    cssRule: {
        scaleX: 0
    },
    ease: "back.out(1.7)",
})
.from('.contact-item', {
    opacity: 0,
    stagger: .5
})
ScrollTrigger.create({
    trigger: '.contact-container',
    animation: contactTl,
    start:'top bottom',
    end:'bottom bottom',
    scrub:2
})