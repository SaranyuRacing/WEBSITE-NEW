


/* ------- menu ------- */

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.Style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitionend", function(){
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) =>{
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});
