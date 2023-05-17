// strings made like primitives are stored on the string pool area of memory for re-use:
// only one copy of any string is stored here
// they are immutable
// ideal for re-use
// referred to as interning

// strings made like objects are stored on the heap area of memory
// they are not reused
// they are mutable
// ideal for changing

//https://www.zhenghao.io/posts/javascript-memory
// get size of heap before and after a large string is interned

function memoryUsed() {
  const mbUsed = process.memoryUsage().heapUsed / 1024 / 1024;
  return `Memory used: ${mbUsed.toFixed(3)} MB`;
}

console.log("start");
const before = memoryUsed();

const bigString = "*".repeat(10 * 1024 * 1024); //10,485,760
console.log(bigString); //need to use the bigString otherwise the JS compiler would just optimize it into nothing
const bigString2 = "*".repeat(10 * 1024 * 1024); //10,485,760
console.log(bigString2); //this has re-used the interned value, so heap size does not increase
// const bigString3 = "xo".repeat(10 * 1024 * 1024); //10,485,760
// console.log(bigString3); // after this code is run heap size is roughly 25Mb - this has been interned separarately
// the first string is re-used
// because it has been interned into string pool memory
// because it was declared like a primitive

console.log("\nbefore:");
console.log(before); //roughly 5Mb
console.log("\nafter:");
console.log(memoryUsed()); //roughly 15Mb WHETHER OR NOT second string created
