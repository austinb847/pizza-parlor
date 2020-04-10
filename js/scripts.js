//business logic
var Pizza = function(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.calcPrice = function() {
  if (this.size === "small") {
    this.price_size = 8.0;
  } else if (this.size === "medium") {
    this.price_size = 10.00;
  } else {
    this.price_size = 14.00;
  }

  this.price_toppings = this.toppings.length > 3 ? 5.74 : 3.50;

  return this.price_size + this.price_toppings;

}


var pizza = new Pizza("medium", ["pepperoni", "olives", "mushrooms", "peppers"]);
console.log(pizza.calcPrice());