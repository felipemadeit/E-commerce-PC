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
            let totalPrice = totalPriceText.replace(/[^\d.-]/g, "");
            grandTotal += totalPrice;
        });
        document.getElementById('grand-total').textContent = formatPrice(grandTotal);
    }

    function formatInitialPrices() {
        let priceElements = document.querySelectorAll('[id^="total-price-"]');
        priceElements.forEach(element => {
            let priceText = element.textContent.replace(/[^\d.-]/g, ""); // Remove non-numeric characters
            let price = parseFloat(priceText);
            element.textContent = formatPrice(price);
        });
        updateCartTotal(); // Update the grand total after formatting individual prices
    }

    // Format all prices when the DOM is fully loaded
    formatInitialPrices();
});
