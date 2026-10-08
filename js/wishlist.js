function getWishlist(){
  const localWish = localStorage.getItem('wishlist');
  if(localWish === null){
    return [];
  }else{
    return JSON.parse(localWish);
  }
}

function saveWishlist(wishlist){
 localStorage.setItem("wishlist" , JSON.stringify(wishlist));
}

function isInWishlist(id){
  const wishlist = getWishlist();
  return wishlist.some(item => item.id === id);
}

function addToWishlist(product){
  const wishlist = getWishlist();

  if(isInWishlist(product.id)){
    return;
  }

  const {id , title , price , thumbnail} = product;
  const wishlistItem = {id , title , price , thumbnail};
  wishlist.push(wishlistItem);

  saveWishlist(wishlist);
}

function removeFromWishlist(id){
  const wishlist = getWishlist();
  const newList = wishlist.filter(item => item.id !== id);
  saveWishlist(newList);
}
