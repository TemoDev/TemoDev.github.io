const offerTl = gsap.timeline({defaults:{duration:1.5}});

offerTl
.from('.offer-title', {
    y:'-130%'
})
.from('.offer-card', {
    opacity:0,
    stagger:0.2
})

ScrollTrigger.create({
    animation:offerTl,
    trigger:'.offers',
    start:'-15% 20%',
    end:'bottom bottom',
    scrub:2,
})