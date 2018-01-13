var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = { [item]: Math.floor(Math.random()*100) };
  console.log(`${item} has been added to your cart.`);
  cart.push(itemObject);
  return cart;
}

function viewCart() {
  
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  }
  
  var message = "In your cart you have ";
  
  var itemsAndPrices = [];
  
  for (var i=0; i<cart.length; i++) {
    var itemPricePair = cart[i];
    var item = Object.keys(itemPricePair)[0];
    var price = itemPricePair[item];
    
    itemsAndPrices.push(`${item} at $${price}` + (i === cart.length-1? '.':', '));
  }
  console.log(`In your cart, you have ${itemsAndPrices}`);
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  var i = 0;
  var containsItem = false;
  
  /*Checks to see if the item is in the cart */
  while (containsItem === false && i < cart.length) {
    containsItem = cart[i].hasOwnProperty(item);
    i++;
  }
  
  if (containsItem === false) {
    console.log("That item is not in your cart.")
  }
  /*Removes the item from the cart*/
  else {
    var itemIndex = i-1;
    cart.splice(itemIndex, 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  var message;
  if (cardNumber === undefined) {
    message = "Sorry, we don't have a credit card on file for you.";
  }
  else {
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
  }
  console.log(message);
}
