/**
 * function composition is to create a function
 * that is composed of two or more functions
 */

const toNum = (str) => +str;
const square = (num) => num * num;

// composite
const toNumAndSquare = (str) => square(toNum(str));
console.log(toNumAndSquare("5"));
