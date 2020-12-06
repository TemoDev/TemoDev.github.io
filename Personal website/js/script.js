const cursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-link');
const navSocialLinks = document.querySelectorAll('.nav-social-link');
const introTitleSup = document.querySelector('.intro-title-sup-inner');
const navLogo = document.querySelector('.nav-logo');

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('nav-link-hover');
        cursor.classList.add('cursor-out');
    })
    link.addEventListener('mouseleave', () => {
        link.classList.remove('nav-link-hover');
        cursor.classList.remove('cursor-out');
    })
})
navSocialLinks.forEach(socialLink => {
    socialLink.addEventListener('mouseover', () => {
        socialLink.classList.add('nav-socialLink-hover');
        cursor.classList.add('cursor-grow');
    })
    socialLink.addEventListener('mouseleave', () => {
        socialLink.classList.remove('nav-socialLink-hover');
        cursor.classList.remove('cursor-grow');
    })
})

navLogo.addEventListener('mouseover', () => {
    navLogo.classList.add('nav-logo-hover');
    cursor.classList.add('cursor-grow');
})
navLogo.addEventListener('mouseleave', () => {
    navLogo.classList.remove('nav-logo-hover');
    cursor.classList.remove('cursor-grow');
})

window.addEventListener('mousemove', (e) => {

    let windowX = e.pageX - window.innerWidth / 2;
    let windowY = e.pageY - window.innerHeight / 2;

    introTitleSup.style.transform = 'translate(' + windowX / 200 + 'px,' + windowY / 200 + 'px)';
    document.querySelector('.intro-title-black').style.transform = 'translate(' + (-51 + windowX / 15000 * 100) + '%,' + (-50 + windowY / 15000 * 100) + '%)';
    document.querySelector('.intro-title-white').style.transform = 'translate(' + (-51 + windowX / 15000 * 100) + '%,' + (-50 + windowY / 15000 * 100) + '%)';
});