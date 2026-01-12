const quantityButtons = document.querySelectorAll('[data-button]');
const itemQuantity = document.querySelector('#item-quantity');
const currentPrice = document.querySelector('.price-current');
const addToCartBtn = document.querySelector('.button-addToCart');
const thumbnailImgs = document.querySelectorAll('.thumbnail');
const shoppingCart = document.querySelector('.img-cart');
const cartDialog = document.querySelector('dialog');
const cartPill = document.querySelector('.cart--pill');
const cartQuantity = document.querySelector('.dialog--card-quantity');

let quantity = 0;
let isOpen = false;

// window.addEventListener('DOMContentLoaded', () => {
//   cartDialog.show();
// });

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

thumbnailImgs.forEach((thumbnail) => {
  // Get the data-thumbnail value/number
  thumbnail.addEventListener('click', () => {
    const img = thumbnail.querySelector('img');
    const number = img.dataset.thumbnail;
    const featuredPhoto = document.querySelector('.featured-photo');
    const featuredImg = featuredPhoto.querySelector('img');
    featuredImg.setAttribute('src', `images/image-product-${number}.jpg`);

    thumbnailImgs.forEach((thumbnail) =>
      thumbnail.classList.remove('selected-img')
    );

    thumbnail.classList.add('selected-img');
  });
});

shoppingCart.addEventListener('click', () => {
  if (isOpen) {
    cartDialog.close();
    isOpen = false;
    console.log('close cart');
  } else {
    cartDialog.show();
    isOpen = true;
    console.log('open cart');
  }
});

addToCartBtn.addEventListener('click', () => {
  cartPill.innerText = quantity;
  const price = currentPrice.innerText;
  const priceNumber = parseFloat(price.slice(1));

  const total = quantity * priceNumber;
  createDialogCardEl(total);
});

const createDialogCardEl = (totalprice) => {
  const div = document.createElement('div');

  div.classList.add('dialog--card');
  div.innerHTML = `
              <img src="images/image-product-1-thumbnail.jpg" alt="shoes">
          <div class="dialog--inner-wrapper">
            <h3>Fall Limited Edition Sneakers</h3>
            <div>
              <span>$125.00</span>
              <span class="dialog--card-quantity">x ${quantity}</span>
              <span>$${totalprice}</span>
            </div>
          </div>
          <img class="dialog--trash" src="images/icon-delete.svg" alt="trash can icon">
    `;

  cartDialog.insertAdjacentElement('afterbegin', div);
};
