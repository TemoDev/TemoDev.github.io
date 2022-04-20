const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links--visible");
  burger.classList.toggle("burger--active");
});
