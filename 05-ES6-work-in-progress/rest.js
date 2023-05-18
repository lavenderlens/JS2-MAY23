/**
 * spread operator is also called spread syntax
 * rest operator also called rest params
 * similar to Java's varargs, and Python's args / kwargs
 * used to pack several function args unto one reference
 * useful for methods where num args varies or is not known
 * must be the last param on the list
 */

//ES5
function es5Average(nums) {
  var total = 0;
  for (let num of nums) {
    total += num;
  }
  return total / nums.length;
}
console.log(es5Average([4, 8, 3, 6])); //5.25

//ES6
function es6Average(...nums) {
  var total = 0;
  for (let num of nums) {
    total += num;
  }
  return total / nums.length;
}
console.log(es6Average(4, 8, 3, 6)); //single value args // 5.25
