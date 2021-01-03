const tl = gsap.timeline({defaults: { ease: "power3.out", duration: 1}});

const introVideo = CSSRulePlugin.getRule(".intro-video::before");

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
        backgroundImage: 'linear-gradient(to bottom, $green, $blue)'
    }
}, '-=.8')
.from('.intro-video video',{
    x: '-150%'
}, '-=.8')