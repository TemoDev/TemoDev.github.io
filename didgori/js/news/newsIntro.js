const newsTl = gsap.timeline();

newsTl
.from('.newsIntro', {
    height: '0vh',
    delay: 0.2,
    duration:1
})
.from('.newsIntro-element', {
    y: '100%',
    duration: 0.5,
    stagger: 0.1,
}, '-=1')
.to('.newsIntro', {
    height: '50vh',
    delay: 0.3,
    duration:1
}, 'newsIntroAnim')
.from('.news-cards', {
    display:'none',
    opacity: 0
})
.from('.footer-news', {
    display:'none',
    opacity: 0
})
