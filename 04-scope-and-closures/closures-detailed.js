/**
 * a closure is a function with a ref to one or more lexically scoped variables
 * lexically scoped means the variable and its immediate environment
 *
 * that is, the variable exists one scope level up from the returned function
 * and crucially, will hold its value between invocations/calls of that function
 *
 * closures also work because functions are first-order objects in JS
 * meaning its possible to pass functions to other functions
 * and return functions from other functions
 */

// 1. define the closure function in a function declaration
// this then matters not where it occurs in your codebase
function getNextNumber() {
  let nextNumber = 1; //the lex-scoped var
  return function () {
    return nextNumber++;
  };
}
// 2. Create the closure by calling the closure function in a function expression
const getNextClosure1 = getNextNumber();
console.log(getNextClosure1());
console.log(getNextClosure1());
console.log(getNextClosure1());
console.log(getNextClosure1());
console.log(getNextClosure1());

// restart the closure from new?
const getNextClosure2 = getNextNumber();
console.log(getNextClosure2());
console.log(getNextClosure2());
console.log(getNextClosure2());
console.log(getNextClosure2());
console.log(getNextClosure2());

// using command line art:
function starMaker() {
  let star = "";
  return function () {
    return (star += "*");
  };
}
const makeStars1 = starMaker();
console.log(makeStars1());
console.log(makeStars1());
console.log(makeStars1());
console.log(makeStars1());

function reverseStarMaker() {
  let stars = "**********";
  let counter = 10; //2 lex-scoped vars
  return function () {
    return stars.substring(0, counter--);
  };
}

const makeStars2 = reverseStarMaker();
console.log(makeStars2());
console.log(makeStars2());
console.log(makeStars2());
console.log(makeStars2());
console.log(makeStars2());

/**
 * In summary 3 things make a closure:
 * 1. a lexically-scoped variable or variables
 * 2. in a function that itself returns another function
 * 3. assigned to another variable at a later time as a function expression
 */

// In React, the useState hook is widely used as a decorator for functions that gives them state
// the useState hook returns two parts: a piece of state initialised when hook is called
// and a function to update that state
// the useState hook leverages closures in vanilla JS!

function myUseState(initialValue) {
  var state = { value: initialValue };
  return [
    state,
    function (newValue) {
      state.value = newValue;
    },
  ];
}

/**
 * state is the lex-scoped var
 * the destructured return value returns both current/initial state AND the function
 * multiple calls to myUseState.setState() update state in an ongoing basis.
 */

// var array = myUseState(1);
// var state = array[0];
// var setState = array[1];
// OR, using array destructuring (see ES6 chapter)
const [state, setState] = myUseState(1);
console.log(state.value);
setState(2);
console.log(state.value);
