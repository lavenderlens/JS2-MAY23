/*arrayMethodsSong.js is from @Una 
(Una Kravets, Chrome Browser, CSS Working Group) 
https://twitter.com/una/status/1092122139627536386?s=21
- it's highly entertaining 😂
here's the code Una uses in the background -
 */
// map      : transform EVERY element with the transform logic passed in as a callback
// filter   : return ONLY those elements that pass the filter test, with the predicate logic passed in as a callback
// reduce   : return A SINGLE VALUE after iterating over the original array, with the accumulator logic passed in as a callback
// here Una supplies an optional DEPENDENCY ARRAY as a second options argument
// thus preserving the array nature by writing to an empty array and so not flattening into a single value - very neat!

//  Una's entertaining example:
const newArr = [1, 3, 0].map((val) => {
  return val + 1;
});

const smallVals = [1, 12, 13, 14, 6].filter((val) => {
  return val < 10;
});

const juice = ["kiwi", "apple"].reduce((drink, item) => {
  drink.push(`squeezed ${item}`);
  return drink;
}, []);

// Array.prototype.map() differs from forEach in that
// IT returns a NEW ARRAY:
const transformedVals = [10, 20, 30].forEach((val) => val * 10);
// more usual versions of reduce that return single value
const flatjuice3 = ["kiwi", "apple", "orange", "pear"].reduce((first, next) => {
  return `${first} + ${next}`;
}); // "kiwi + apple + orange + pear"
const sumVals = [10, 20, 30, 40, 50].reduce((prev, curr) => prev + curr); // 150~
