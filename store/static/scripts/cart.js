document.addEventListener("DOMContentLoaded", function () {
    window.updateQuantity = function(itemId, quantity, price) {
        fetch(cartUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken
            },
            body: JSON.stringify({
                item_id: itemId,
                quantity: quantity
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                let totalPriceElement = document.getElementById(`total-price-${itemId}`);
                totalPriceElement.textContent = formatPrice(quantity * price);
                updateCartTotal();
                updateTotalItems(); // Actualiza la cantidad total de productos
            } else {
                alert("Hubo un problema al actualizar la cantidad.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    function formatPrice(amount) {
        return amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    }

    function updateCartTotal() {
        let cartItems = document.querySelectorAll('.cart-item');
        let grandTotal = 0;
        cartItems.forEach(item => {
            let totalPriceText = item.querySelector('[id^="total-price-"]').textContent;
            // Remove currency symbol and convert formatted number to a float
            let totalPrice = parseFloat(totalPriceText.replace(/[^\d,-]/g, "").replace(/\./g, "").replace(/,/g, "."));
            grandTotal += isNaN(totalPrice) ? 0 : totalPrice;
        });
        document.getElementById('grand-total').textContent = formatPrice(grandTotal);
    }

    function updateTotalItems() {
        let cartItems = document.querySelectorAll('.cart-item');
        let totalItems = 0;
        cartItems.forEach(item => {
            let quantityElement = item.querySelector('select.quantity-sec');
            let quantity = parseInt(quantityElement.value);
            totalItems += isNaN(quantity) ? 0 : quantity;
        });
        document.getElementById('total-items').textContent = `${totalItems} Products`;
    }

    function formatInitialPrices() {
        let priceElements = document.querySelectorAll('[id^="total-price-"]');
        priceElements.forEach(element => {
            let priceText = element.textContent.replace(/[^\d,-]/g, "").replace(/\./g, "").replace(/,/g, ".");
            let price = parseFloat(priceText);
            element.textContent = formatPrice(isNaN(price) ? 0 : price);
        });
        updateCartTotal();
        updateTotalItems(); // Actualiza la cantidad total de productos al iniciar
    }

    formatInitialPrices();
});
