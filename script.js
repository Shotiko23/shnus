function addToCart(productId) {
    const productName = document.querySelector(`.product:nth-child(${productId}) h2`).innerText;

    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = productName;

    cartItems.appendChild(listItem);
}
let cartVisible = false;  // To track the cart visibility

function addToCart(productId) {
    const productName = document.querySelector(`.product:nth-child(${productId}) h2`).innerText;

    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = productName;

    cartItems.appendChild(listItem);
}

function toggleCart() {
    const cartSection = document.getElementById('cart');
    cartVisible = !cartVisible;
    
    if (cartVisible) {
        cartSection.classList.remove('hidden');
    } else {
        cartSection.classList.add('hidden');
    }
}
