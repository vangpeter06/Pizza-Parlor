Describe: Pizza()

Test: It should return a Pizza object with two properties for topping and size
code: let newOrder = new Pizza (["pepperoni", "pineapple"], "medium")
Expected Output : newOrder {toppings: {["pepperoni", "pineapple"], size: "medium", price: 0}

Describe: addTotalCost

Test: "It should price the pizza depending on the size is order."
Code: 
let newOrder = new Pizza (["pepperoni", "pineapple"], "medium")
newOrder.addTotalCost();
Expect Output: 10

Test: "It should price the pizza depending on the size and toppings is order."
Code: 
let newOrder = new Pizza (["pepperoni", "pineapple"], "medium")
newOrder.addTotalCost();
Expect Output:12
