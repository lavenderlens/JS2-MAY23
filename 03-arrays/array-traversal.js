/**
 * array traversal methods are 7-fold:
 *
 * NATIVE and suited to arrays:
 * 1. for loop
 * 2. for of loop
 * 3. forEach loop
 *
 * INHERITED Object methods
 * 4. for in loop
 * 5. Object.keys()
 * 6. Object.values()
 * 7. Object.entries()
 *
 * WHILE loops (while and do-while) are also available in JS
 * but their stop condition may be other than the length of the array
 * eg user types x to quit
 * eg end of file reached
 * eg you had n goes, and all n goes are used up
 */
const band = ["Agnetha", "Frida", "Benny", "Björn"];

// 1. using var or let: caveat var has memory leak

for (var i = 0; i < band.length; i++) {
  console.log(band[i]);
}

console.log(i); // 4
//using let: ReferenceError: i is not defined

// 2.
for (var element of band) {
  console.log(element);
}
console.log(element); //Björn - memory leak with var

// 3.
band.forEach((el) => console.log(el.toUpperCase()));

// every array has a length prop
// associative props are excluded from length
// length is writable
// so you can destroy data by decreasing length
// or add empty elements by increasing length
//

band.length = 3;
band.forEach((el) => console.log(el.toUpperCase()));

// forEach takes up to 3 positional arguments
// you can use 1,2, or 3 of them but they MUST be in same order: element, index, array
// you may NOT use element, array
band.forEach((el, idx) => console.log(`${idx + 1}: ${el.toUpperCase()}`));
band.forEach((el, idx, arr) =>
  console.log(`${idx + 1}: ${el.toUpperCase()}, ${arr[idx]}`)
);

band.length = 10;
// foreach SKIPS empty elements
// an array that has empty elements is said to be SPARSE
band.forEach((el) => console.log(el.toUpperCase()));

for (let element of band) {
  console.log(element);
}
for (let i = 0; i < band.length; i++) {
  console.log(band[i]);
}

// 5-7
console.log(Object.keys(band));
console.log(Object.values(band));
console.log(Object.entries(band));
/**
[ '0', '1', '2' ]
[ 'Agnetha', 'Frida', 'Benny' ]
[ [ '0', 'Agnetha' ], [ '1', 'Frida' ], [ '2', 'Benny' ] ]
 */
