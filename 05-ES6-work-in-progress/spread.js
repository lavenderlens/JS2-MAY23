/**
 * spread is used to unpack an iterable - an array or an object
 * it is most often used to make copies
 * NOTE: SPREAD MAKES SHALLOW COPIES
 * and while it may be used recursively to make deep copies of nested iterables,
 * this is very confusing syntax and only gets worse the more levels there are
 */
var nums = [1, 2, 3];

// ES5 copy array:
var es5NumsCopy = Object.assign([], nums);
// is the reference broken?
es5NumsCopy.push(4);
console.log(nums); //[1,2,3] original unaffected

// ES6 spread
const es6NumsCopy = [...nums]; //literally,
// "spread the content of old array into new array"

es6NumsCopy.push(4);
console.log(nums); //[1,2,3] original unaffected

// apparently deep copying of objects is also possible
const person = { name: "Tony Soprano", age: 42 };
const personCopy = { ...person };
personCopy.name = "Benny Blanco";
console.log(person);

// what about an array of objects?
const objects = [
  { name: "Tony Soprano", age: 42 },
  { name: "Benny Blanco", age: 32 },
  { name: "Tony Cipriati", age: 52 },
];
const objectsCopy = [...objects];
objectsCopy[2].name = "Anthony C.";
console.log(objects); //{ name: 'Anthony C.', age: 52 }
// so this, at one level down is SHALLOW copying - does not break the reference in the first object

//using spread recursively:
const objectsDeepCopy = [
  { ...objects[0] },
  { ...objects[1] },
  { ...objects[2] },
];
objectsDeepCopy[1].name = "Bernard White";
console.log(objects); //{ name: 'Benny Blanco', age: 32 },

// spread may be used to extend object or array props
const extendedNums = [...nums, 4, 5, 6];
console.log(extendedNums); //[ 1, 2, 3, 4, 5, 6 ]

const extendedPerson = { ...person, height: 1.7 };
console.log(extendedPerson); //{ name: 'Tony Soprano', age: 42, height: 1.7 }
