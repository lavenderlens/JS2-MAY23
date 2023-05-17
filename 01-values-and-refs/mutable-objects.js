/**
 * In JS, objects, arrays (and maps, sets etc), and functions are MUTABLE types, by default
 * Think of immutability as :Save As" because you know it returns something new
 * Mutability is like "Save" and changes the original
 * https://www.geeksforgeeks.org/why-is-immutability-so-important-in-javascript/
 */

var x = { a: 1 };
var y = { a: [1, 2, 3] }; //and so on - there will always be immutable values referenced

// x references a mutable object
// that object has one prop, a
// that prop references an immutable value, 1

var z = x; //copy of reference (shallow copy)
// points back to the same object x

z.a += 1;
console.log(z); //{ a: 2 }
console.log(x); //{ a: 2 }//original changed

// a function to change an object
function incrementObjectPure(obj) {
  return (obj.a += 1);
}

console.log(incrementObjectPure(z));
console.log(z); // { a: 3 }
console.log(x); // { a: 3 } original changed
