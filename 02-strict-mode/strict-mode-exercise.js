"use strict";
//accidental globals
var bat = { name: "Bat", price: 10 };
var ball = { name: "Ball", price: 2 };

var basket = {};
Object.defineProperty(basket, "items", {
  value: [],
  writable: false,
  configurable: false,
});

basket.addItem = function (item) {
  this.items.push(item); //this is actually ok
  // a non-writable prop can be a ref
};

var whites = { name: "Cricket whites", price: 99 };
basket.addItem(whites);
console.table(basket.items);
// basket.items = [bat, ball, whites]; //TypeError: Cannot assign to read only property 'items' of object '#<Object>'
// the above error is not a strict-mode thing but is a property of using const

basket.getTotal = function () {
  //no errors
  var total = 0;
  for (let i = 0; i < this.items.length; i++) {
    total += this.items[i].price;
  }
  return total;
};

// with (basket) {
//   // SyntaxError: Strict mode code may not include a with statement
//   addItem(ball);
//   addItem(ball);
//   console.log(getTotal()); //103
// }

// delete basket.items;//TypeError: Cannot delete property 'items' of #<Object>
