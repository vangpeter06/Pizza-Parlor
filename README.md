# _{Programming Language Suggester}_

#### By _**Peter Vang**_

#### _{This is a simple HTML, CSS, and jQuery on pizza parlor.}_

## Technologies Used

* _HTML_
* _CSS_
* _jQuery_
* _Bootstrap_

## Description

_{Parlor pizza webpage is for people to order pizza with the size and toppings they want on it. the application will ask for the size they want and toppings they want and gives them a price with the selection they input.}_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _git clone https://github.com/vangpeter06/Pizza-Parlor _
* _Navigate to the top level of the directory_
* _cd Pizza-parlor_
* _Open index.HTML in your browser_

## Known Bugs

* _None_


## License

_{If you run into any issues or have questions, ideas or concerns please contact me or make a contribution to the code.}_

Copyright (c) _06/20/22_ _Peter Vang_

Licensed under the [MIT License](LICENSE)


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
Expect Output: 12    
