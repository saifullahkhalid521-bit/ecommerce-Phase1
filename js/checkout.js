function renderOrderSummary() {
  const cart = getCart();
  const container = document.getElementById("order-summary");

  if (cart.length === 0) {
    container.innerHTML = `<p>Your cart is empty.</p>`;
    return;
  }

  // items ka HTML
  const itemsHTML = cart.map(item => `
    <div class="summary-item">
      <span class="summary-qty">${item.quantity}×</span>
      <span class="summary-title">${item.title}</span>
      <span class="summary-price">$${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join("");

  // total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  container.innerHTML = `
    ${itemsHTML}
    <div class="summary-total">
      <strong>Total: $${total.toFixed(2)}</strong>
    </div>
  `;
}

renderOrderSummary();