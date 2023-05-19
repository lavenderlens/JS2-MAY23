/**
 * an array transformation is to create a new array from existing
 * // examples include spread, map, filter
 */

var array = [1, 2, 3];
var extendedArray = [...array, 4, 5, 6];

var obj = { a: 1, b: 2 };
var extendedObj = { ...obj, c: 3, d: 4 };

// array objects have built in functions used to perform transformations

/**
 * Array.prototype.map() is a HOF
 * it accepts a func as an arg
 * iterates through the original array
 * applies function to each element
 * returns new array with function applied to each element
 */

const numsSquared = array.map((num) => num * num);
console.log(numsSquared);
/**
 * Array.prototype.filter() is a HOF
 * it accepts a func as an arg
 * iterates through the original array
 * applies function to each element
 * returns new array of only those elements that pass a test (predicate function)
 */

const oddNums = array.filter((num) => num % 2 != 0);
console.log(oddNums);

/**]
 * Array.prototype.reduce() is a HOF
 * it accepts a func as an arg
 * iterates through the original array
 * applies function to each element and the next element
 * returns, typically, a flattened single value
 * if passed an empty array as an optional 2nd arg
 * returns an array again
 * all 3 methods may be chained or pipelined together
 * Typically, the order of operations would be
 * filter(s) first - reduce size of dataset
 * map(s) next
 * reduce finally to flattened single value
 *
 * There is a use case for carrying out map first:
 * if values produced by map affect predicate criteria for filter
 * eg map(()=> price + VAT).filter(()=> price < 100)
 */

const sumOfOddNumsSquared = array
  .map((num) => num ** 2)
  .filter((num) => num % 2 != 0)
  .reduce((current, previous) => current + previous);

console.log(sumOfOddNumsSquared);
