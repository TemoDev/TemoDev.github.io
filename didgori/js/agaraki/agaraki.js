const agarakiTl = gsap.timeline();

agarakiTl
.from('.agaraki-intro', {
    height: '0vh',
    delay: 0.2,
    duration:1
}, 'hydroFirst')
.from('.agaraki-overlay', {
    height: '0vh',
    delay: 0.2,
    duration:1
}, 'hydroFirst')
.from('.agarakiCard-img', {
    opacity: 0,
    duration:1,
}, "-=0.5")
.from('.agarakiCard-inner', {
    opacity: 0,
    duration:1
}, "-=0.5")
.from('.footer-hydro', {
    opacity: 0,
    duration:1,
}, "-=0.5")
