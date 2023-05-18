/**
 * there are at least 3 passes of the code completed before the JS engine runs the code
 * 1. variable and function declarations are loaded
 * 2. expressions are evaluated
 * 3. runtime code is executed.
 *
 * "Hoisting" only occurs with var keyword
 * It looks like everything is written in the wrong order
 * but when you consider the above, it makes perfect sense.
 *
 * actual order below in comments
 */

// call a function that has not been defined
console.log(concatenate()); //3.

// define a function using variables that haven't been declared
function concatenate() {
  // 1.
  a = "con"; //2.
  b = "catenated"; //2.
  return a + b; //2.
}

// finally declare variables that have apparently already been used!
var a, b; //undefined // 1.
// using let throws an Error - ReferenceError: Cannot access 'a' before initialization
