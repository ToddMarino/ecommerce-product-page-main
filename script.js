const quantityButtons = document.querySelectorAll('[data-button]');
const itemQuantity = document.querySelector('#item-quantity');

let quantity = 0;

quantityButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.button;
    if (type === 'increase') {
      quantity++;
    } else if (type === 'decrease' && quantity > 0) {
      quantity--;
    }
    itemQuantity.textContent = quantity;
  });
});
