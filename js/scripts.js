

function Pizza(meat, veggies, size) {
  this.meat = meat;
  this.veggies = veggies;
  this.size = size;
  this.price = 0;
} 

Pizza.prototype.sizePizza = function() {
  // let price = 0;
  if (this.size === "small") {
    this.price = 5;
  } else if (this.size === "medium") {
    this.price = 10;
  } else {
    this.price = 20;
  } 
  return this.price;
}


let newOrder = new Pizza ("pepperoni","pineapple", "medium", price)