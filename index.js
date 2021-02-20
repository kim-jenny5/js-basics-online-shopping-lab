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
 var price = Math.floor(Math.random()*100);
 var obj = {itemName: item, itemPrice: price};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var price = Math.floor(Math.random()*100)
  
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
  }
}

function total() {
  // write your code here
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
    cart.splice(i, 1);
    return cart;
    }
  }
  if (item != cart) {
    return `That item is not in your cart.`;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var cartPrice = total();
    cart = [];
    return `Your total cost is $${cartPrice}, which will be charged to the card ${cardNumber}.`;
  }
  else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}