async function fetchProducts() {
  try{
    const response = await fetch("https://dummyjson.com/products")
    const resJson = await response.json();
    return resJson.products;
  }catch(err){
    console.log(err);
  }
}
fetchProducts();