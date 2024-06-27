document.addEventListener("DOMContentLoaded", function() {
const container = document.querySelector(".container-carousel-img");
const arrowPrev = document.querySelector(".arrow-p");
const arrowNext = document.querySelector(".arrow-n");

let isDown = false;
let startX;
let scrollLeft;

arrowPrev.addEventListener("click", function() {
    console.log("hila")
    container.scrollBy({
        left: -250,
        behavior: "smooth"
    });
});

arrowNext.addEventListener("click", function() {
    container.scrollBy({
        left: 250,
        behavior: "smooth"
    });
});

container.addEventListener("mousedown", function(e) {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", function() {
    isDown = false;
});

container.addEventListener("mouseup", function() {
    isDown = false;
});

container.addEventListener("mousemove", function(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3;
    container.scrollLeft = scrollLeft - walk;
});
});


// Selectores para el carrusel de gráficos
const prevButtonGraphics = document.querySelector(".show_products.graphics .arrow-prev");
const nextButtonGraphics = document.querySelector(".show_products.graphics .arrow-next");
const cardsContainerGraphics = document.querySelector(".show_products.graphics .cards-container");
// Eventos para botones de navegación de gráficos
prevButtonGraphics.addEventListener("click", function() {
    cardsContainerGraphics.scrollBy({
        left: -247,
        behavior: "smooth"
    });
});
nextButtonGraphics.addEventListener("click", function() {
    cardsContainerGraphics.scrollBy({
        left: 247,
        behavior: "smooth"
    });
});


// Selectores para el carrusel de laptops
const prevButtonLaptops = document.querySelector(".show_products.laptops .arrow-prev");
const nextButtonLaptops = document.querySelector(".show_products.laptops .arrow-next");
const cardsContainerLaptops = document.querySelector(".show_products.laptops .cards-container");

// Eventos para botones de navegación de gráficos
prevButtonLaptops.addEventListener("click", function() {
    cardsContainerLaptops.scrollBy({
        left: -247,
        behavior: "smooth"
    });
});

nextButtonLaptops.addEventListener("click", function() {
    cardsContainerLaptops.scrollBy({
        left: 247,
        behavior: "smooth"
    });
});

// Selectores para el carrusel de laptops
const prevButtonKeyboards = document.querySelector(".show_products.keyboards .arrow-prev");
const nextButtonKeyboards = document.querySelector(".show_products.keyboards .arrow-next");
const cardsContainerKeyboards = document.querySelector(".show_products.keyboards .cards-container");

// Eventos para botones de navegación de gráficos
prevButtonKeyboards.addEventListener("click", function() {
    cardsContainerKeyboards.scrollBy({
        left: -247,
        behavior: "smooth"
    });
});

nextButtonKeyboards.addEventListener("click", function() {
    cardsContainerKeyboards.scrollBy({
        left: 247,
        behavior: "smooth"
    });
    }


);









