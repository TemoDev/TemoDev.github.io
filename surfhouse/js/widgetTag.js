// widget tags
const widgetTag = document.querySelectorAll('.widget__tag');
const tagMoreBtn = document.querySelector('.widget-more');
const widgetTagMore = document.querySelector('.widget__tags-more');

for (let i = 0; i < widgetTag.length; i++) {
    widgetTag[i].addEventListener('click', () => {
        widgetTag[i].classList.toggle('widget__tag-active')
    })
}

tagMoreBtn.addEventListener('click', () => {
    widgetTagMore.classList.toggle('widget__tags-more-active');
    tagMoreBtn.style.display = "none";
})