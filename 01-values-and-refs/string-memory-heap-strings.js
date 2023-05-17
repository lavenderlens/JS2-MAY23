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

const bigString = new String("*".repeat(10 * 1024 * 1024)); //10,485,760
console.log(bigString); //need to use the bigString otherwise the JS compiler would just optimize it into nothing
const bigString2 = new String("*".repeat(10 * 1024 * 1024)); //10,485,760
console.log(bigString2); //this WILL NOT re-used the value, as it has not been interned, so heap size WILL increase
// const bigString3 = "xo".repeat(10 * 1024 * 1024); //10,485,760
// console.log(bigString3); // after this code is run heap size is roughly 25Mb - this has been interned separarately
// the first string is re-used
// because it has been interned into string pool memory
// because it was declared like a primitive

console.log("\nbefore:");
console.log(before); //roughly 5Mb
console.log("\nafter:");
console.log(memoryUsed()); //Memory used: 1864.519 MB!!

// stack size
//node --v8-options | grep -B0 -A1 stack-size//fixed-size, eg 864k
