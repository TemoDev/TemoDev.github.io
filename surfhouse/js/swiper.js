import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,  
    slidesPerView:'auto',
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })