function renderProducts(products){
  const products_grid = document.getElementById('products-grid');

  products_grid.innerHTML = products.map(product => `
      <a href="product.html?id=${product.id}" class="product-card">
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class = "price">$${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
      <p>${product.category}</p>
    </a>
    `).join("");
}
fetchProducts().then(products => {
  renderProducts(products);
});