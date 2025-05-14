
class Cart{
    cartItems = undefined;
    localStorageKey = undefined;
    localFromStorage(){
        this.cartItems= JSON.parse(localStorage.getItem(this.localStorageKey));
        if(!this.cartItems){
            this.cartItems = [];
        
        }
    }
    saveToStorage() {
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));
    }
    addToCart(productId) {
        let matchingItem;
       this.cartItems.forEach((cartItem) => {
             if(productId === cartItem.productId){
                 matchingItem = cartItem;
      
             }
        });
    
        if(matchingItem){
            matchingItem.quantity +=1;
        } else{
         
           this.cartItems.push({
                productId : productId,
                quantity : 1
            });
            
        }
        saveToStorage();
         //console.log(cart);
    }
    removeFromCart(proID) {

        const newCart =[];
    
        this.cartItems.forEach((cartItem) => {
    
            if(cartItem.productId !== proID){
                newCart.push(cartItem);
            }
        });
    
       this.cartItems = newCart;
       this.saveToStorage();
    
    }
    updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if(productId === this.cartItems.productId){
                matchingItem = cartItem;
            }

        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
    
}

const cart = new Cart();

cart.localStorageKey = 'cart-oop';

  