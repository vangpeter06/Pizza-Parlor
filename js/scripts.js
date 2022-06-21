

function Pizza(toppings, size) {
  this.toppings =toppings
  this.size = size;
  this.price = 0;
} 

Pizza.prototype.addTotalCost = function() {
  if (this.size === "small") {
    this.price = 5;
  } else if (this.size === "medium") {
    this.price = 10;
  } else {
    this.price = 20;
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

$(document).ready(function() {
  $("form#container").submit(function(event){
    event.preventDefault;
    let checkSize = $("#sizePizza").val();
    let topsArray = [];
    let finalPizza = new Pizza(checkSize, topsArray);
    finalPizza.addTotalCost();
    const total = finalPizza.price;
    $("totalPar").show();
    $("size").text(checkSize);
    $("toppings").text(topsArray);
    $("finalPrice").show();
    $("total").text(total);
    // $("#addToppings").text(toppings)
    // $("#total").text(newOrder.addTotalCost());
    // $("#customer-output").show();
    // $(".btn-submit").hide();
  })
})
// let newOrder = new Pizza (["pepperoni","pineapple"], "medium")