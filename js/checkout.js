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
      <span class="summary-qty">${item.quantity} ×</span>
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

const checkoutForm = document.getElementById("checkout-form");
const errorDiv = document.getElementById("form-error");

checkoutForm.addEventListener("submit" , (e) => {
  e.preventDefault();

  if (getCart().length === 0) {
    errorDiv.textContent = "Your cart is empty.";
    errorDiv.style.display = "block";
    return;
  }

  const formData = new FormData(checkoutForm);
  const data = Object.fromEntries(formData);

  const requiredFields = ["fullName", "email", "phone", "address", "city", "zip"];
  const allFilled = requiredFields.every(field => data[field].trim() !== "");

  if(!allFilled){
  errorDiv.textContent = "Please fill all required fields.";
  errorDiv.style.display = "block";
  return;
}

  const orderNumber = Math.floor(Math.random() * 1000000);
  const confirmation = document.getElementById("order-confirmation");

  confirmation.innerHTML = `
    <div class="confirmation-box">
    <h2>Order Placed! 🎉</h2>
    <p>Thank you, ${data.fullName}!</p>
    <p>Your order number is <strong>#${orderNumber}</strong></p>
    <p>A confirantion email has been sent to <strong>${data.email}</strong></p>
    <a href="products.html" class="btn btn-primary">Continue Shopping</a>
    </div>
  `;
  confirmation.style.display = "block";

  document.querySelector(".checkout-container").style.display = "none";
  localStorage.removeItem("cart");
});





