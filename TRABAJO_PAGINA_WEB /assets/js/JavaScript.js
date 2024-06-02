
let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function moveLeft() {
    const images = document.querySelectorAll('.carousel-image');
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
}

function moveRight() {
    const images = document.querySelectorAll('.carousel-image');
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', updateCarousel);

function openCloseMenu(){
    const nav = document.querySelector(".nav")
    const abrir = document.querySelector("#abrir")
    const cerrar = document.querySelector("·cerrar")

}

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
