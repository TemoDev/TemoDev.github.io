let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let header = document.querySelector('.header');
let navLink = document.querySelectorAll('.nav__link');

for (let i = 0; i < navLink.length; i++) {
    navLink[i];
}

burger.addEventListener('click', function () {
    nav.classList.toggle('nav--active');

    line1.classList.toggle('burger__exit');
    line2.classList.toggle('burger__exit2');
    line3.classList.toggle('burger__exit3');
})

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrollValue = window.scrollY;
    header.classList.toggle('header--sticky', scrollValue > 0);


    if (scrollValue >= 500 && scrollValue <= 1400) {
        navLink[0].classList.add('nav__link--active');
    } else if (scrollValue >= 1700 && scrollValue <= 2200) {
        navLink[1].classList.add('nav__link--active');
    } else if (scrollValue >= 5700 && scrollValue <= 6400) {
        navLink[2].classList.add('nav__link--active');
    } else if (scrollValue >= 7800 && scrollValue <= 8600) {
        navLink[3].classList.add('nav__link--active');
    } else if (scrollValue >= 8700) {
        navLink[4].classList.add('nav__link--active');
    } else {
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove('nav__link--active');
        }
    }

    return scrollValue;
})