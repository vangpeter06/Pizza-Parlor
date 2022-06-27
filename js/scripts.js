function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
} 

Pizza.prototype.addTotalCost = function() {
  for(size of this.size){
    if (size === "small") {
     this.price += 5;
    } else if (size === "medium") {
     this.price += 10;
    } else {
     this.price += 20;
    }
  }
  for(toppings of this.toppings) {
    if(toppings.includes("pepperoni")){
      this.price += 1;
    } else if(toppings.includes("extra cheese")){
      this.price += 1;
    }else if(toppings.includes("anchovies")){
      this.price += 1;
    } else if(toppings.includes("pineapple")){
      this.price += 1;
    };    
  }

  return this.price;
};   

$(document).ready(function() {
  $("form#container").submit(function(event) {
    event.preventDefault;
    let sizes = [];
    let toppings = [];
    $("input[type=checkbox][name=size]:checked").each(function() {
      sizes.push($(this).val());
    });
    $("input[type=checkbox][name=toppings]:checked").each(function() {
      toppings.push($(this).val());
    });
    let finalPizza = new Pizza(sizes, toppings);
    let totalPrice = finalPizza.addTotalCost();
     $("#size").text(
      "Congrats your order " + sizes + " pizza with " + toppings + "toppings.");
      $("#finalPrice").text(
        "Your grand total is $" + totalPrice + ".");
     return false;
  });
});
