const wishlist_container = document.getElementById("wishlist-container");

function renderWishlist(){
  const wishlist = getWishlist()

  if(wishlist.length === 0){
    wishlist_container.innerHTML = `
    <div class = "empty-wishlist">
      <p>Your wishlish is empty</p>
      <a href = "products.html" class = "btn btn-primary">Continue Shopping</a>
    </div>
    `;
    return;
  }

  wishlist_container.innerHTML = wishlist.map(item => {
    
    return `
  <div class="wish-item-img">
    <img src="${item.thumbnail}" alt="${item.title}">
      <div class="wish-info">
      <h3>${item.title}</h3>
      <p class = "price">$${item.price}</p>
        <div class="wish-btns">
        <button class = "wish-moveToCart-btn" data-action="move" data-id=${item.id}>Move to Cart</button>
        <button class="wish-remove-btn" data-action="remove" data-id=${item.id}>Remove</button>
      </div>
    </div>
  </div>
  `}).join("");
}
renderWishlist();