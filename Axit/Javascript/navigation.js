const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
let navLink = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
    nav.classList.toggle('burger__active');
    line1.classList.toggle('burger__exit');
    line2.classList.toggle('burger__exit2');
    line3.classList.toggle('burger__exit3');
})

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;

    if (scrollValue >= 900 && scrollValue <= 1450) {
        navLink[0].classList.add('nav__link--active');
    } else if (scrollValue >= 2600 && scrollValue <= 3000) {
        navLink[1].classList.add('nav__link--active');
    } else if (scrollValue >= 3200 && scrollValue <= 4000) {
        navLink[2].classList.add('nav__link--active');
    } else if (scrollValue >= 4100 && scrollValue <= 4500) {
        navLink[3].classList.add('nav__link--active');
    } else if (scrollValue >= 5200) {
        navLink[4].classList.add('nav__link--active');
    } else {
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove('nav__link--active');
        }
    }

    return scrollValue;
})