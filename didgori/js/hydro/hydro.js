const hydroTl = gsap.timeline();

hydroTl
.from('.hydro-intro', {
    height: '0vh',
    delay: 0.2,
    duration:1
}, 'hydroFirst')
.from('.hydro-overlay', {
    height: '0vh',
    delay: 0.2,
    duration:1
}, 'hydroFirst')
.from('.hydro-inner', {
    opacity: 0,
    duration:1
})
.from('.hydroContent-img', {
    opacity: 0,
    duration:1,
}, "-=0.5")
.from('.footer-hydro', {
    opacity: 0,
    duration:1,
}, "-=0.5")
