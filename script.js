const quantityButtons = document.querySelectorAll('[data-button]');
const itemQuantity = document.querySelector('#item-quantity');

const thumbnailImgs = document.querySelectorAll('.thumbnail')

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

thumbnailImgs.forEach((thumbnail) => {
    // Get the data-thumbnail value/number
    thumbnail.addEventListener('click', () => {
        const img = thumbnail.querySelector('img');
        const number = img.dataset.thumbnail;
        const featuredPhoto = document.querySelector('.featured-photo')
        const featuredImg = featuredPhoto.querySelector('img')
        featuredImg.setAttribute('src', `images/image-product-${number}.jpg`)

        thumbnailImgs.forEach((thumbnail) => thumbnail.classList.remove('selected-img'));

        thumbnail.classList.add('selected-img')
    })
})
