/**
 * we can now spec default params for functions
 * if no value is provided, the default will be passed in
 * saves a lot of null, undefined, and Errors in production
 */

function product(num1, num2) {
  return num1 * num2;
}

//what would happen if we provided one arg only?
console.log(product(2)); //NaN

function divide(num1, num2) {
  return num1 / num2;
}

console.log(divide(1)); //NaN
console.log(divide(1, 0)); //Infinity

function product2(num1, num2 = 1) {
  return num1 * num2;
}

function divide2(num1, num2 = 1) {
  return num1 / num2;
}

console.log(product2(2)); //2
console.log(divide2(1)); //1
