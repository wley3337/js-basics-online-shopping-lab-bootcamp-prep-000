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
  cart.push(Object.assign({},{ itemName: `${item}`},{itemPrice: `${Math.floor(100*Math.random())}`}));
}


function viewCart() {
  // write your code here
  //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  if (cart.length === 0){
    return "Your Shopping cart is empty.";
  } else {
  //for loop that recalls each object and places it into the string In your cart, you have      . 
      
     var tempCart = Ojbect.assign({}, cart);
      
     var viewCartList = [];
      
     for (var i = 1; i < tempCart.length; i++){ 
       
       viewCartList.push(
      ` ${Object.key(tempCart)[${i-1}]} at ${Object.values(tempCart)[${i-1}]}`
      );
     }
     for (; i=== tempCart.length;i++) {viewCartList.push(`${tempCart.pop()}.`);
}
      return `In your cart, you have${viewCartList}.`;
    
    }
      

//   }
// }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
