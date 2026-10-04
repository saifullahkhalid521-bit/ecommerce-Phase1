function renderProducts(products){
  const products_grid = document.getElementById('products-grid');

  products_grid.innerHTML = products.map(product => `
        <div class="product-card">
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.price}</p>
      <p>${product.rating}</p>
      <p>${product.category}</p>
    </div>
    `).join("");
}
fetchProducts().then(products => {
  renderProducts(products);
});