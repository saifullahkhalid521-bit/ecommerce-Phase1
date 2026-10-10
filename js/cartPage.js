function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-container");
  const link_btns = document.getElementsByClassName("btn");

  if(cart.length === 0) {
    container.innerHTML = `
    <div class="empty-cart">
      <p>Your cart is empty</p>
      <a href="products.html" class="btn-primary">Continue Shopping</a>
    </div>
    `;

    for(let btn of link_btns){
      btn.style.display = "none";
    }
    
    return ;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
  <img src="${item.thumbnail}" alt="${item.title} ">
  <div class="cart-item-info">
    <h3>${item.title} </h3>
    <p class="price">$${item.price}</p>
    <div class="cart-item-controls">
      <button class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
      <span class="qty">${item.quantity}</span>
      <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
      <button class="remove-btn" data-id="${item.id}">Remove</button>
    </div>
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

const container = document.getElementById("cart-container");

container.addEventListener("click", (e) => {
  const target = e.target;

  if(target.matches(".qty-btn , .remove-btn")){
    const id = Number(target.dataset.id);
    const action = target.dataset.action;

    if (action === "increase"){
      increaseQuantity(id);
    }else if(action === "decrease"){
      decreaseQuantity(id);
    }else if (target.matches(".remove-btn")){
      removeFromCart(id);
    }

    renderCart();
  }
});
renderCart();