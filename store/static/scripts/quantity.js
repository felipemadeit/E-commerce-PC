document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let index = 0;
    const totalItems = items.length;
    const itemWidth = items[0].clientWidth;

    prevButton.addEventListener('click', function() {
        index = index > 0 ? index - 1 : totalItems - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        console.log("hola")
        index = index < totalItems - 1 ? index + 1 : 0;
        updateCarousel();
    });

    function updateCarousel() {
        const translateX = -index * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }

    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const quantityInput = document.getElementById('quantity');

    decrementBtn.addEventListener('click', function() {
        decreaseQuantity();
    });

    incrementBtn.addEventListener('click', function() {
        increaseQuantity();
    });

    function decreaseQuantity() {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }

    function increaseQuantity() {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue < 15) {
            quantityInput.value = currentValue + 1;
        }
    }
});
