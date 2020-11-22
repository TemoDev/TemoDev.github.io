const geoTl = gsap.timeline();

geoTl
.from('.geoIntro', {
    height: '0vh',
    delay: 0.2,
    duration:1
}, 'geodeziaFirst')
.from('.geoIntroOverlay', {
    height: '0vh',
    delay: 0.2,
    duration:1
}, 'geodeziaFirst')
.from('.geodeziaCard', {
    opacity: 0,
    duration:1,
    stagger:.2
})
