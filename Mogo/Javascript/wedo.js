let acordion = document.querySelectorAll('.accordion__header');
let acordionContent = document.querySelectorAll('.accordion__content');
let acordionArrow = document.querySelectorAll('.accordion__arrow');

for(let i = 0; i < acordionContent.length; i++){
    acordionContent[i];
    acordionArrow[i];
    acordion[i];
}

acordion[0].addEventListener('click', function(){
    acordionContent[0].classList.toggle('accordion__content--active');
    acordionArrow[0].classList.toggle('accordion__arrow--active');
})
acordion[1].addEventListener('click', function(){
    acordionContent[1].classList.toggle('accordion__content--active');
    acordionArrow[1].classList.toggle('accordion__arrow--active');
})
acordion[2].addEventListener('click', function(){
    acordionContent[2].classList.toggle('accordion__content--active');
    acordionArrow[2].classList.toggle('accordion__arrow--active');
})