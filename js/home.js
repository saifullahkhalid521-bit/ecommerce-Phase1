async function renderFeaturedProducts(){
  const container = document.getElementById("featured-products")

  container.innerHTML = `<p class = "loading">Loading...</p>`;

  try{
  const productsH = await fetchProducts();
  const featured = productsH.slice(0 , 4);

  container.innerHTML = featured.map(product => `
  <a href = "product.html?id=${product.id}" class="product-card">
  <img src="${product.thumbnail}" alt="${product.title}">
  <h3>${product.title}</h3>
  <p class="price">$${product.price}</p>
  <p class="rating">⭐ ${product.rating}</p>
  <p class="category">${product.category}</p>
  </a>
  `) .join("");
  } catch (err) {
    container.innerHTML = `<p>Failed to load featured products.</p>`
  }
}
renderFeaturedProducts();

// --------------------------------------------------------------------------------------
async function renderCategories() {
  const container = document.getElementById("categories-grid");

  try {
    const categories = await fetchCategories();

    container.innerHTML = categories.map(category => `
      <a href="products.html" class="category-card">
        ${category}
      </a>
    `).join("");
  } catch (err) {
    container.innerHTML = `<p>Failed to load categories.</p>`;
  }
}

renderCategories();
