const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const introTl = gsap.timeline({defaults:{duration:1}});

introTl
.from('.introTitle',{
    x:'-12%',
    opacity:0
}, 'firstAnim')
.from('.introSup',{
    x:'-12%',
    opacity:0,
    delay: 0.3
}, 'firstAnim')
.from('.service-card', {
    opacity:0,
    stagger:0.2
})