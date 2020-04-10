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


/* var pizza = new Pizza("medium", ["pepperoni", "olives", "mushrooms", "peppers"]);
console.log(pizza.calcPrice());
console.log(pizza.price_size);
console.log(pizza.price_toppings); */


//UI logic




$(document).ready(function() {

  var createToppingsArray = function(topping_selections) {
    var toppings = [];
    topping_selections.each(function() {
      toppings.push(this.value);
    });
    return toppings
  };

  $("input[name='toppings_select']").change(function() {
    if($(this).prop("checked")) { 
      if($(this).attr('id') === "checkpepperoni") {
        $(".imgContainer").append("<img src= 'img/pepperoni.png' class='topping'>");
      } else if ($(this).attr('id') === "checksausage") {
        $(".imgContainer").append("<img src= 'img/sausage.png' class='topping'>");
      } else if ($(this).attr('id') === "checkbacon") {
        $(".imgContainer").append("<img src= 'img/bacon.png' class='topping'>");
      } else if ($(this).attr('id') === "checkpeppers") {
        $(".imgContainer").append("<img src= 'img/bananapeppers.png' class='topping'>");
      } else if ($(this).attr('id') === "checkolives") {
        $(".imgContainer").append("<img src= 'img/olives.png' class='topping'>");
      } else {
        $(".imgContainer").append("<img src= 'img/mushrooms.png' class='topping'>");
      }
    };


  });
    


  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var size_selection = $("#pizza-size :selected").val();
    var topping_selections = $("input[name='toppings_select']:checked");
    var topping_array = createToppingsArray(topping_selections);
    
    var pizza = new Pizza(size_selection, topping_array);
    var price = pizza.calcPrice();
    console.log(price);
    /* $("form#orderForm").hide();
    $(".itemPanel").show();
    $(".imgContainer").show(); */
  });
});