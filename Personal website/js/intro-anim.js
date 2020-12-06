const tlIntro = gsap.timeline();

tlIntro
.to('.introAnimBg-white', {
    scaleX: 1
})
.to('.introAnim-line-black', {
    x: '10%',
    opacity:1
}, 'firstTitle')
.to('.introAnim-line', {
    x: '0%',
    stagger: .1,
    opacity:1
}, 'firstTitle')
.from('.introAnim-box', {
    strokeDashoffset: '1874px',
}, '-=.6')
// phaze 2
.to('.introAnimBg-white', {
  width: '100%',
}, 'introAnim2')
.to('.intro-anim-white', {
  display:'none',
}, 'introAnim2')
.to('.introAnim-box-white', {
  display: 'none',
}, 'introAnim2')

.to('.introAnim-box-black', {
    right: '50%',
    transform: 'translate(-50%,-50%)'
}, 'introAnim2')

.to('.introAnim-wrapper-black', {
    right: '50%',
    transform: 'translate(-50%, -50%)',
    width:'40%',
}, 'introAnim2')
.to('.introAnim-line-black', {
    transform: 'translateX(5%)',
    ease: Back.easeOut.config(1.7),
    stagger: .1
}, 'introAnim2')

// phase 3
.to('.introAnimBg-white', {
    height: '50vh',
}, 'introAnim3')
.to('.introAnim-wrapper-black', {
    scale: .9,
    opacity: 0,
}, 'introAnim3')
.to('.introAnim-box-black', {
    scale: .9,
    opacity: 0,
    display: 'none'
}, 'introAnim3')
// phase 4

.to('.intro-back-white', {
    opacity: 1
}, 'test')
.to('.introAnimBg-white', {
    opacity: 0,
    delay: .2
}, 'test')
.to('.introAnimBg-white', {
    display: 'none'
})
.from('.intro-title', {
    opacity: 0
}, "-=1")
.from('.intro-title-sup', {
    scaleY: 0
}, "-=1")
.to('nav', {
    opacity: 1
})