const productionTl = gsap.timeline({defaults:{duration:1,  ease: "power3.out"}});

productionTl
.from('.production-title',{
    x:'-10%',
    opacity: 0
})
.from('.production-card', {
    scaleY:0,
    stagger:0.2,
    opacity:0
})

ScrollTrigger.create({
    animation: productionTl,
    trigger: '.production',
    start:'-20% 15%',
    end:'60% bottom',
    scrub: 2.5,
})