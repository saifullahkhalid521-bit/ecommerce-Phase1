const productId = new URLSearchParams(window.location.search).get("id");
const product_detail = document.getElementById("product-detail");

if(!productId){
  product_detail.innerHTML = "<p>No product selected.</p>"
}
else{
    fetchSingleProduct(productId).then(singleProduct => {
    product_detail.innerHTML = ` 
    <div class = "product-image">
    <img src="${singleProduct.thumbnail}" alt="${singleProduct.title}">
    </div>
    <div class = "product-info">
      <h3>${singleProduct.title}</h3>
      <p class = "price">$${singleProduct.price}</p>
      <p class = "rating">⭐ ${singleProduct.rating}</p>
      <p>${singleProduct.description}</p>
      <p class = "category">${singleProduct.category}</p>
     </div> 
    `
  })
}

