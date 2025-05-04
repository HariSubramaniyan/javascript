export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [];

}
function saveToStorage() {
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
         if(productId === cartItem.productId){
             matchingItem = cartItem;
  
         }
    });

    if(matchingItem){
        matchingItem.quantity +=1;
    } else{
     
        cart.push({
            productId : productId,
            quantity : 1
        });
        
    }
    saveToStorage();
     //console.log(cart);
}

export function removeFromCart(proID) {

    const newCart =[];

    cart.forEach((cartItem) => {

        if(cartItem.productId !== proID){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();

}


    //return matchingItem;

  