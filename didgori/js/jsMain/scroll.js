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
navLink[3].addEventListener('click', ()=>{
    gsap.to(window, {duration:1.0, scrollTo: '.production',})
})
navLink[5].addEventListener('click', ()=>{
    gsap.to(window, {duration:1.0, scrollTo: '.contact',})
})