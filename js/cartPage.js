function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-container");

  if(cart.length === 0) {
    container.innerHTML = `
    <div class="empty-cart">
      <p>Your cart is empty</p>
      <a href="product.html" class="btn-primary">Continue Shopping</a>
    </div>
    `;
    return ;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
  <img src="${item.thumbnail}" alt="${item.title} ">
  <div class="cart-item-info">
    <h3>${item.title} </h3>
    <p class="price">$${item.price}</p>
    <p>Quantity: ${item.quantity}</p>
  </div>
  </div>
    `).join("");

  const total  = cart.reduce((sum , item) => sum + item.price * item.quantity , 0);

  container.innerHTML += `
  <div class = "cart-total">
    <strong>Total: $${total.toFixed(2)}</strong>
  </div>
  `;
};
renderCart();
