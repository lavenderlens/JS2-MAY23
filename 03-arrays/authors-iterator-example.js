/**
 * an iterator steps through an array one step at a time
 * loops leverage iterators until a stop condition is reached
 */

const authors = ["Elliott", "Woolf", "Dickens", "Bronte", "Shelley"];
const iterator = authors.entries();
let entry = iterator.next();
console.log(entry); //{ value: [ 0, 'Elliott' ], done: false }
// so, to get value for each entry:
console.log(entry.value[1]);
console.log(entry.done);

// see manual: this full implementation of processAuthor() from manual
// this function is a closure function
// it can be called multiple times and remembers state from one call to the next
// more on closures next session (Scope)
function processAuthor() {
  const authors = ["Russell", "Kant", "Wittgenstein", "Chomsky", "Descartes"];
  // with the local function-scoped authors commented out
  // JS looks for a variable authors in the next up level of the scope chain
  let iterator = authors.entries();
  return function () {
    return iterator.next().value[1];
  };
}
console.log(processAuthor()); // returns function - this is not the closure
const authorsClosure = processAuthor(); //this is the closure, made as a function expression, from the closure function
console.log(authorsClosure());
console.log(authorsClosure());
console.log(authorsClosure());
console.log(authorsClosure());
console.log(authorsClosure());
// console.log(authorsClosure());//TypeError: Cannot read properties of undefined (reading '1')
