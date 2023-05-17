/**
 * actually, there are FOUR types of equality in JS
 * the main two, === and ==, are often called "Strict" vs "loose"
 * actually ALL comparisons using either operator are === comparisons
 * but == allows for the coercion of type before a === comparison is made
 */
var n = 1;
var s = "1";

console.log(n == s); //true
console.log(n === s); //false
console.log(n === Number(s)); //true - type coerced, which == does under the hood

console.log(1 / 1); // 1
console.log(1 / "1"); // 1 (second operand coerced to number)
console.log(1 / "1x"); // NaN (a number was expected as second operand for / but none was provide)

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

// third and fourth types of equality - much rarer
// Object.is(firstObject, secondObject)

console.log(Object.is(NaN, NaN)); // true

console.log(+0 === -0); // true
console.log(+0 == -0); // true

console.log(Object.is(+0, -0)); // false

// object equality - no two objects are equal by default
console.log(Object.is({}, {})); // false
console.log({} === {}); // false
console.log({} == {}); // false

var objX = { a: 1 };
var objY = { a: 1 };
console.log(Object.is(objX, objY)); // false
console.log(objX === objY); // false
console.log(objX == objY); // false

// delete operator
delete objX.a; //cannot be undone
console.log(objX);

// freezing object properties
var objZ = { a: 1 };
Object.defineProperty(objZ, "a", {
  value: 1,
  configurable: false, //cannot delete
  writable: false, //cannot edit
});

console.log(objZ);
objZ.a = 2; //not working
console.log(objZ);
delete objZ.a; //not working either
console.log(objZ);

// const ketword does not freeze indovidual object props
// but makes the overall reference non-writable

const obj$ = { a: 1 };
// obj$ = "another thing entirely"; //TypeError: Assignment to constant variable.
obj$.a = 2; //works, can still mutate object props
console.table(obj$);
