/**
 * functions with dependencies on global variables (variables declared in the too level of scope)
 * are hard to test in isolation, and may not conform to the CS concept of Idempotence
 *
 * Idempotence is the property of certain operations in mathematics and computer science
 * whereby they can be applied multiple times without changing the result beyond the initial application.
 *
 * ALL our functions should ideally be pure
 *
 * In JS, Strings, Numbers, and Booleans are immutable types
 */

var num = 1;
// impure function with one global dependency
function incrementNumber() {
  return ++num;
}

console.log(incrementNumber());
console.log(incrementNumber());

num = 11;

console.log(incrementNumber());
console.log(incrementNumber());

// change the variable, results change from the function

// a pure function
function incrementNumberPure(num) {
  return ++num;
}
console.log(incrementNumberPure(2));
console.log(incrementNumberPure(2));

num = 22; // no effect on pure function

console.log(incrementNumberPure(2));
console.log(incrementNumberPure(2));
