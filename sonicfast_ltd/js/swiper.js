let swiper = new Swiper('.swiper-container-main', {
  direction: 'vertical',
  mousewheel: true,
  speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  // team slider
  let swiperTeam = new Swiper('.swiper-container-team', {
    direction: 'horizontal',
    loop: false,  
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    }
  });
  
  // news slider
  let swiperNews = new Swiper('.swiper-container-news', {
    direction: 'horizontal',
    loop: false,  
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next-news',
      prevEl: '.swiper-button-prev-news',
    }
  });