const menu = document.querySelector(".menu-close-open");
const nav = document.querySelector(".nav_menu");

menu.addEventListener("click", ()=>{
    nav.classList.toggle("desplegar")
});