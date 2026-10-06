const productId = new URLSearchParams(window.location.search).get("id");
const product_detail = document.getElementById("product-detail");

async function renderProduct() {
  if (!productId) {
    product_detail.innerHTML = "<p>No product selected.</p>";
    return;
  }

  const singleProduct = await fetchSingleProduct(productId);

  product_detail.innerHTML = `
    <div class="product-image">
      <img src="${singleProduct.thumbnail}" alt="${singleProduct.title}">
    </div>
    <div class="product-info">
      <h3>${singleProduct.title}</h3>
      <p class="price">$${singleProduct.price}</p>
      <p class="rating">⭐ ${singleProduct.rating}</p>
      <p>${singleProduct.description}</p>
      <p class="category">${singleProduct.category}</p>
      <div class="product-actions">
        <button id="add-to-cart-btn" class="btn btn-primary">Add to Cart</button>
        <button id="add-to-wishlist-btn" class="btn btn-secondary">Add to Wishlist</button>
      </div>
    </div>
  `;

  const addToCartBtn = document.getElementById("add-to-cart-btn");
  const addToWishlistBtn = document.getElementById("add-to-wishlist-btn");

  addToCartBtn.addEventListener("click", () => addToCart(singleProduct));
  addToWishlistBtn.addEventListener("click", () => addToWishlist(singleProduct));
}

renderProduct();