document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container-carousel-img");
    const cardWidth = container.offsetWidth;
    const arrows = document.querySelectorAll(".arrow-n, .arrow-p");
    let currentIndex = 0;
    arrows.forEach((arrow) => {
        arrow.addEventListener("click", function () {
            if (this.classList.contains("arrow-p")) {
                currentIndex = Math.min(currentIndex + 1, 1);
            } else if (this.classList.contains("arrow-n")) {
                currentIndex = Math.max(currentIndex - 1, 0);
            }
            const offset = -currentIndex * cardWidth;
            container.style.transform = `translateX(${offset}px)`;
        });
    });
});

