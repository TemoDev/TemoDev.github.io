var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        576:{
            slidesPerView: 3
        },
        768:{
            slidesPerView: 4
        }
    }
  });