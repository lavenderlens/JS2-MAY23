var s1 = "Hello";
var s2 = "Hello";
var s3 = new String("Hello");
var s4 = new String("Hello");
// actually both types encode strings, s1-s2 are primitives, s3-s4 are objects
// but this is not the main distinction - it's where they are stored in memory
var s5 = String("Hello");
var s6 = s4;

console.log(s1 == s2); //true
console.log(s1 === s2); //true
console.log(s3 == s4); //false
console.log(s3 === s4); //false
console.log(s1 == s5); //true - String constructor function with NO NEW KEYWORD
console.log(s1 === s5); //true - String constructor function with NO NEW KEYWORD
console.log(s6 == s4); //true - shallow copy of ref only

console.log(Object.is(s6, s4)); // true
console.log(Object.is(s3, s4)); // false (still!)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// strings made like s1 and s2 are stored on the string pool area of memory for re-use:
// only one copy of any string is stored here
// they are immutable
// strings made like s3 and s4 are stored on the heap area of memory
// they are not reused
// they are mutable
