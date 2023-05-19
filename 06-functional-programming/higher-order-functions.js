/**
 * a higher order function - HOC - is one that accepts or returns a function (or both).
 * functions in JS are objects
 * a function name is a variable therefore that references a function object
 */

const f1 = () => console.log("F1");
// copy the value of f1 (a ref to its function object) into f2:
const f2 = f1;
f2(); //F1

// f1 has been treated like a HOF - can be passed

// decorator example:
// a decorator is used to modify the behaviour of an existing function:

function logit(func) {
  function modifiedFunc() {
    console.log(`Calling ${func.name} . . .`);
    func();
    console.log(`Done calling ${func.name} . . .`);
  }
  return modifiedFunc;
}

const hello = () => console.log("Hello");
logit(hello)(); // note extra brackets syntax
