const error_box = document.getElementById("error-box");
async function fetchProducts() {
  try{
    const response = await fetch("https://Dummyjson.com/products")
    const resJson = await response.json();
    return resJson.products;
  }catch(err){
    console.log(err);
    console.log("HTTP something went wrong!");

    error_box.style.display = "block";
    error_box.innerHTML = `
    <p>HTTP something went wrong!</p>
    <button>Try Again</button>
    `
  }
}

async function fetchSingleProduct(id){
try {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const resJson = await response.json();
  return resJson;
}catch(err){
  console.log(err);
}
}