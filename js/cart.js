function getCart(){
  const localCart = localStorage.getItem("cart");
  if(localCart === null){
    return [];
  }
  else{
    return JSON.parse(localCart);
  }
}


function saveCart(cart){
  localStorage.setItem("cart" , JSON.stringify(cart));
}


function isInCart(id){
  const cart = getCart();
  return cart.some(product => product.id === id)
}
console.log(isInCart(1));
console.log(isInCart(99));
console.log(isInCart(5));


function addToCart(product){
  const cart = getCart();

  if(isInCart(product.id)){
     const existingItm = cart.find(item => item.id === product.id);
     existingItm.quantity += 1;

  } else {
    const {id , title , price , thumbnail} = product;
    const cartItem = {id , title , price , thumbnail , quantity: 1};
    cart.push(cartItem);
  }
  saveCart(cart);
}

localStorage.clear();
addToCart({ id: 1, title: "Lipstick", price: 12.99, thumbnail: "x" });
addToCart({ id: 1, title: "Lipstick", price: 12.99, thumbnail: "x" });
addToCart({ id: 2, title: "Mascara", price: 9.99, thumbnail: "y" });
console.log(getCart());