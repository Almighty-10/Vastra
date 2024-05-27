document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('.item-quantity');
    const totalAmountElement = document.querySelector('#total-amount');
    const cgstAmountElement = document.querySelector('#cgst-amount');
    const sgstAmountElement = document.querySelector('#sgst-amount');
    const finalTotalElement = document.querySelector('#final-total');
    const promoCodeInput = document.querySelector('#promo-code');
    const applyCouponButton = document.querySelector('#apply-coupon');
    const invalid = document.querySelector('.invalid');
    const gift = document.querySelector('#giftCard');
    const apply = document.querySelector('.apply-coupon');
    let promoDiscount = 0;

    function calculateTotal() {
        let total = 0;

        document.querySelectorAll('.pro-1').forEach(item => {
            const priceElement = item.querySelector('.price');
            const quantityElement = item.querySelector('.item-quantity');

            const price = parseFloat(priceElement.innerText.replace('Rs.', '').replace(',', ''));
            const quantity = parseInt(quantityElement.value);

            total += price * quantity;
        });

        const cgst = total * 0.09;
        const sgst = total * 0.09;
        const totalWithGST = total + cgst + sgst;
        const finalTotal = totalWithGST * (1 - promoDiscount);

        totalAmountElement.innerText = total.toFixed(2);
        cgstAmountElement.innerText = cgst.toFixed(2);
        sgstAmountElement.innerText = sgst.toFixed(2);
        finalTotalElement.innerText = finalTotal.toFixed(2);
    }

    function updateQuantity(button, increment) {
        const item = button.closest('.pro-1');
        const quantityElement = item.querySelector('.item-quantity');
        let quantity = parseInt(quantityElement.value);
        
        if (increment) {
            quantity += 1;
        } else {
            quantity -= 1;
        }

        if (quantity < 0) {
            quantity = 0;
            
        }

        quantityElement.value = quantity;

        const decrementButton = item.querySelector('#decrement');
        if (quantity === 0) {
            decrementButton.innerHTML = '<img src="delete.png" class="delete-icon" alt="Delete">';
        } else {
            decrementButton.innerText = '-';
        }

        calculateTotal();
    }

    quantityInputs.forEach(input => {
        input.addEventListener('change', calculateTotal);
    });

    document.addEventListener('click', event => {
        if (event.target.id === 'increment') {
            updateQuantity(event.target, true);
        } else if (event.target.id === 'decrement') {
            updateQuantity(event.target, false);
        }
    });

    gift.addEventListener('click', () => {
        if (gift.checked) {
            apply.style.visibility = 'visible';
        } else {
            apply.style.visibility = 'hidden';
        }
    });

    applyCouponButton.addEventListener('click', () => {
        const promoCode = promoCodeInput.value.trim();
        if (promoCode !== "") {
            if (promoCode === 'Almighty20') {
                promoDiscount = 0.20;
                invalid.innerHTML = "";
            } else {
                promoDiscount = 0;
                invalid.innerHTML = "Invalid PromoCode";
            }
        } else {
            invalid.innerHTML = "Please Enter PromoCode";
        }
        calculateTotal();
    });

    // Initially hide the apply button
    apply.style.visibility = 'hidden';

    calculateTotal();
});
