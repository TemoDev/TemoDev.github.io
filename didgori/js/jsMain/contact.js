const contactTl = gsap.timeline({defaults:{duration:1}});

contactTl
.from('.contact-title', {
    y: '-15%',
    opacity: 0
})
.from('.contact-text', {
    x:'-10%',
    opacity: 0,
    stagger:0.1
}, 'first')
.from('.contact-map', {
    scaleY:0,
    opacity:0,
    // pointerEvents: 'visible',
}, 'first');

ScrollTrigger.create({
    animation: contactTl,
    trigger:'.contact',
    start: 'top 50%',
    end: 'bottom bottom',
    scrub: 1,
})