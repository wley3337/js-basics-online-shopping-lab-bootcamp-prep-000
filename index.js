var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  cart.push(Object.assign({},{ itemName: `${item}`},{itemPrice: Math.floor(100*Math.random())}));
  return `${item} has been added to your cart.`;
}


function viewCart() {
  // write your code here
  //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
  //for loop that recalls each object and places it into the string In your cart, you have      . 
      
     var tempCart = Object.assign ({}, cart);
      
     var viewCartList = [];
      
     for (var i = 0; i < tempCart.length; i++){ 
       viewCartList.push(
        ` ${Object.key(tempCart)[i]} at ${Object.values(tempCart)[i]}`
       );
     }
    // I shouldn't need this second for loop because the array returns a camama delineated list with nothing on the end. 
    //for (; i=== tempCart.length;i++) {viewCartList.push(`${tempCart.pop()}.`);

    return `In your cart, you have${viewCartList}.`;
  }
      
    
    }
      



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
