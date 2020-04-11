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

  var price = this.price_size + this.price_toppings;
  
  return parseFloat(price.toFixed(2));

}

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
        $(".imgContainer").append("<img src= 'img/pepperoni.png' class='topping' id= 'pepImg'>");
      } else if ($(this).attr('id') === "checksausage") {
        $(".imgContainer").append("<img src= 'img/sausage.png' class='topping' id= 'sausImg'>");
      } else if ($(this).attr('id') === "checkbacon") {
        $(".imgContainer").append("<img src= 'img/bacon.png' class='topping' id= 'bacImg'>");
      } else if ($(this).attr('id') === "checkpeppers") {
        $(".imgContainer").append("<img src= 'img/bananapeppers.png' class='topping' id= 'banImg'>");
      } else if ($(this).attr('id') === "checkolives") {
        $(".imgContainer").append("<img src= 'img/olives.png' class='topping' id= 'oliImg'>");
      } else {
        $(".imgContainer").append("<img src= 'img/mushrooms.png' class='topping' id= 'mushImg'>");
      }
    } else {
        if($(this).attr('id') === "checkpepperoni") {
          $("#pepImg").remove();
        } else if ($(this).attr('id') === "checksausage") {
          $("#sausImg").remove();
        } else if ($(this).attr('id') === "checkbacon") {
          $("#bacImg").remove();
        } else if ($(this).attr('id') === "checkpeppers") {
          $("#banImg").remove();
        } else if ($(this).attr('id') === "checkolives") {
          $("#oliImg").remove();
        } else {
          $("#mushImg").remove();
        }
    }
  });
    


  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    var size_selection = $("#pizza-size :selected").val();
    var topping_selections = $("input[name='toppings_select']:checked");
    var topping_array = createToppingsArray(topping_selections);
    
    var pizza = new Pizza(size_selection, topping_array);
    var price = pizza.calcPrice();
    
    $("form#orderForm").hide();
    $(".itemPanel").show();
    
    $(".order").append("<li>" + "Size cost: " + pizza.price_size + "</li>");
    $(".order").append("<li>" + "Toppings cost: " + pizza.price_toppings + "</li>");
    $(".itemPanel").append("<h3>" + "Your order Total: " + price);
  });
});