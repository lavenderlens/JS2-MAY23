/** there exists for every primitive type an associated wrapper class
 * this creates an object
 * and this object will have methods/function
 * these methods are also available to primitives
 * which are converted to their wrapper type
 * function operformed
 * converted down again to primitives
 * strings are different: they are objects whichever way you declare them
 * the difference with strings is WHERE you declare them in memory - see string demo
 */

var x = 1;
console.log(typeof x); //number

var b = true;
console.log(typeof b); //boolean

var s = "Hello";
console.log(typeof s); //string

var wrappedX = new Number(x);
console.log(typeof wrappedX); //object

var wrappedB = new Boolean(b);
console.log(typeof wrappedB); //object

var wrappedS = new String(s);
console.log(typeof wrappedS); //object

// some wrapper class methods, all available on primitives too:

console.log(x.toFixed(2)); //1.00
console.log(b.toString()); //"true"
console.log(s.startsWith("H")); //true

// in particular, the Boolean wrapper or function constructor, may be used to derive truthy or falsey values
// also the !! operator -
// the FIRST ! gives the logical negation of the operand
// the SECOND ! reverses this value

console.log(Boolean("a string")); //true
console.log(Boolean("")); //false
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean({ a: 1 })); //true
console.log(Boolean({})); //true
console.log("using !!");
console.log(!!"a string");
console.log(!!"");
console.log(!!1);
console.log(!!0);
console.log(!!{ a: 1 });
console.log(!!{});
