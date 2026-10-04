function renderProducts(products){
  const products_grid = document.getElementById('products-grid');

  products_grid.innerHTML = products.map(product => `
        <div class="product-card">
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class = "price">$${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
      <p>${product.category}</p>
    </div>
    `).join("");
}
fetchProducts().then(products => {
  renderProducts(products);
});