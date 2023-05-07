// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Cart data
let cart = JSON.parse(sessionStorage.getItem('cartProducts')) || [];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById('cart-list');

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="remove-from-cart-btn" data-id="${product.id}" onclick="removeFromCart(${product.id})">Remove from Cart</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  cart.push(product);
  sessionStorage.setItem('cartProducts', JSON.stringify(cart));
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((product) => product.id !== productId);
  sessionStorage.setItem('cartProducts', JSON.stringify(cart));
  renderCart();
}

// Clear cart
function clearCart() {
  cart = [];
  sessionStorage.removeItem('cartProducts');
  renderCart();
}

// Initial render
renderProducts();
renderCart();