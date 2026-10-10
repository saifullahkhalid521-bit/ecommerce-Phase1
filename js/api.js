const error_box = document.getElementById("error-box");
const error_box2 = document.getElementById("error-box2");
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

  if(!response.ok){
    throw new Error("Product not found");
  }
  const resJson = await response.json();
  return resJson;
}catch(err){
      console.log(err);
    console.log("HTTP something went wrong!");

    error_box2.style.display = "block";
    error_box2.innerHTML = `
    <p>HTTP Product not found!</p>
    <button>Try Again</button>
    `
}

}