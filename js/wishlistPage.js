const wishlist_container = document.getElementById("wishlist-container");

function renderWishlist(){
  const wishL = getWishlist()

  if(wishL.length === 0){
    wishlist_container.innerHTML = `
    <div class = "empty-wishlist">
      <p>Your wishlist is empty</p>
      <a href = "products.html" class = "btn btn-primary">Continue Shopping</a>
    </div>
    `;
    return;
  }

  wishlist_container.innerHTML = wishL.map(item => {
    
    return `
  <div class="wish-item-img">
    <img src="${item.thumbnail}" alt="${item.title}">
      <div class="wish-info">
      <h3>${item.title}</h3>
      <p class = "price">$${item.price}</p>
        <div class="wish-btns">
        <button class = "wishlist-btn" data-action="move" data-id="${item.id}">Move to Cart</button>
        <button class="wishlist-btn" data-action="remove" data-id="${item.id}">Remove</button>
      </div>
    </div>
  </div>
  `}).join("");
}

wishlist_container.addEventListener("click" , (e) => {
  const target = e.target;

  if(target.matches(".wishlist-btn")) {
    const id = Number(target.dataset.id);
    const action = target.dataset.action;

    if(action === "remove"){
      removeFromWishlist(id);
    }else if (action === "move"){
      const wishl = getWishlist();
      const item = wishl.find( i => i.id === id);
      if(item){
        addToCart(item);
        removeFromWishlist(id);
      }
    }
    renderWishlist();
  }
})

renderWishlist();

