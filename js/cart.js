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

function removeFromCart(id){
  const cart = getCart();
  const updateCart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart" , JSON.stringify(updateCart));
}


function updateQuantity(id , newQuantity){
  const cart = getCart();
  const item = cart.find(item => item.id === id);
  if (item){
    item.quantity = newQuantity;
    saveCart(cart);
  }
}

function increaseQuantity(id){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if(item){
    updateQuantity(id , item.quantity + 1);
  }
}

function decreaseQuantity(id){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item && item.quantity > 1){
    updateQuantity(id , item.quantity - 1);
  }
}
