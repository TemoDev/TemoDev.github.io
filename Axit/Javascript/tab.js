const tabs = document.querySelectorAll('.tab__pointer');

for (i = 0; i < 3; i++) {
    tabs[i];
    tabs[0].style.backgroundColor = "#ff8b38";
}
tabs[0].addEventListener('click', function () {
    this.style.backgroundColor = "#ff8b38";
    tabs[1].style.backgroundColor = "#333";
    tabs[2].style.backgroundColor = "#333";
})
tabs[1].addEventListener('click', function () {
    this.style.backgroundColor = "#ff8b38";
    tabs[0].style.backgroundColor = "#333";
    tabs[2].style.backgroundColor = "#333";
})
tabs[2].addEventListener('click', function () {
    this.style.backgroundColor = "#ff8b38";
    tabs[0].style.backgroundColor = "#333";
    tabs[1].style.backgroundColor = "#333";
})