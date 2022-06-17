

function Pizza(toppings, size) {
  this.toppings =toppings
  this.size = size;
  this.price = 0;
} 

Pizza.prototype.addTotalCost = function() {
  if (this.size === "small") {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 10;
  } else {
    this.price += 20;
  } ;
  if(this.toppings.includes("pepperoni")){
    this.price += 1;
  };
  if(this.toppings.includes("extra cheese")){
    this.price += 1;
  };
  if(this.toppings.includes("anchovies")){
    this.price += 1;
  };
  if(this.toppings.includes("pineapple")){
    this.price += 1;
  };    
  return this.price;
};   


let newOrder = new Pizza (["pepperoni","pineapple"], "medium")