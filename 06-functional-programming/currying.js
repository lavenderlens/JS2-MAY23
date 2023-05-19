/**
 * currying means to take a function and convert it
 * into a HOF that accepts just one arg
 * it enables the creation of function variations
 * where one or more arguments are known,
 * so therefore lookup time is more performant with less args
 */

const s = "Hello World";

// const sub1 = s.substr(0, 5);//deprecated
const sub1 = s.substring(0, 5);
console.log(sub1); //Hello

// substring method has three unknowns:
// the start index
// the end index exclusive
// the string

// supposing we know two of these
// currying enables us to produce a variation of the substring function that only accepts one arg
// the point? this is more performant, with less lookup time

// writing curried functions makes more sense at first if
// 1. we use function declarations rather than arrow functions
// 2. we write from the inside out, "Russian Doll" style

function curriedSubstring(startIndex) {
  return function (endIndex) {
    return function (str) {
      return str.substring(startIndex, endIndex);
    };
  };
}

// we can use this as a factory function to make others from:

const firstNchars = curriedSubstring(0); //start from beginning to N chars
const sub5 = firstNchars(5)(s); //value of start from beginning to 5 chars for string str
console.log(sub5);

const first5chars = curriedSubstring(0)(5); //the first 5 chars of ANY string
// the only thing we need to pass now is the string itself
const subHello = first5chars(s);
console.log(subHello);
