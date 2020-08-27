const burger = document.querySelector('.burger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const menuLinks = document.querySelector('.menu-links');
const testLink = document.querySelectorAll('.manu__link-mainColumn');


burger.addEventListener('click', () => {
    for (let i = 0; i < testLink.length; i++) {
        testLink[i].classList.toggle('manu__link-mainColumn-active');
    }
    line1.classList.toggle('burger__exit1');
    line2.classList.toggle('burger__exit2');
    line3.classList.toggle('burger__exit3');
})