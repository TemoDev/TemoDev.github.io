const burger = document.querySelector('.burger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const navInner = document.querySelector('.nav__inner');
const navLink = document.querySelectorAll('.nav-link');
const nav = document.querySelector('nav');

// animation timeline
const tl = gsap.timeline({
    defaults: {
        duration: 0.5,
    }
});

burger.addEventListener('click', () => {
    tl.to(navLink, {
        x: '0%',
        stagger: 0.1,
    })
    burger.classList.toggle('burger-active')
    line1.classList.toggle('line1-active')
    line2.classList.toggle('line2-active')
    line3.classList.toggle('line3-active')
    nav.classList.toggle('nav-active')


})

window.addEventListener('click', (e) => {
    if (e.target !== burger && e.target !== line1 && e.target !== line2 && e.target !== line3 && e.target !== nav && e.target !== navInner) {
        burger.classList.remove('burger-active');
        line1.classList.remove('line1-active');
        line2.classList.remove('line2-active');
        line3.classList.remove('line3-active');
        nav.classList.remove('nav-active');
    }
})
