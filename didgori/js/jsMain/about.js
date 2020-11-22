const aboutTl = gsap.timeline({
    defaults: {
        duration: 0.5,
    }
});

aboutTl
.to('.aboutUs', {
    clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)',
    duration: 3
})
.from('.aboutUsCard-img', {
    y:'-100%'
})
.from('.aboutUs-title', {
    x:'-100%'
})
.from('.aboutUs-text', {
    x:'-150%'
})

ScrollTrigger.create({
    trigger:'.aboutUs',
    animation:aboutTl,
    start:'-20% 50%',
    end:'bottom bottom',
    scrub:1.5,
})