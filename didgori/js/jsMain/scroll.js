let navLinks = document.querySelectorAll('.nav-link');
navLink[0].addEventListener('click', ()=>{
    gsap.to(window, {duration:1.0, scrollTo: '#introMain',})
})
navLink[1].addEventListener('click', ()=>{
    gsap.to(window, {duration:1.0, scrollTo: '.aboutUs',})
})
navLink[2].addEventListener('click', ()=>{
    gsap.to(window, {duration:1.0, scrollTo: '.offers',})
})
navLink[4].addEventListener('click', ()=>{
    gsap.to(window, {duration:1.0, scrollTo: '.contact',})
})