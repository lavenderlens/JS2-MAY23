/**
 * strict mode makes for more robust JS code
 * it is an old technology and doesn't replace more modern variants like typescript
 * but will be used by them as standard
 * it enables:
 *  1. error handling for otherwise silent errors
 *  2. optimisations
 *  3. reserved keywords
 */
"use strict";
// SILENT ERRORS
// 1. accidental globals
// x = 1;//ReferenceError: x is not defined

// 2. assignment to non-writable props
var obj = { x: 1 };
Object.defineProperty(obj, "x", { writable: false });
// obj.x = 2;//TypeError: Cannot assign to read only property 'x' of object '#<Object>'

// 3. duplicate parameter names
// function square(num, num) {
// SyntaxError: Duplicate parameter name not allowed in this context
// return num * num;
// }
// console.log(square(3, 3)); // 9
// console.log(square(90, 3)); // 9 takes last param only

// 4. props on a primitive
var str = "Hello";
// str.name = "I am a string";
// console.log(str.name); //undefined in non-strict
//TypeError: Cannot create property 'name' on string 'Hello'

// OPTIMISATIONS
// 5. eval()
var data = "my data";
eval('var data = "some other data";');
console.log(data); //non-strict: "some other data", strict: "my data"

//KEYWORDS:
var package = "my package";
console.log(package); //non-strict: works
// strict: SyntaxError: Unexpected strict mode reserved word
