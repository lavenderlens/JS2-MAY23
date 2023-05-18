/**
 * Arrays in JS are zero-indexed collections of values
 * values may be of different types
 * but for lookup, other collections are more appropriate
 * generally an array holds elements of the same type
 *
 * JS does NOT support associative arrays
 * eg. where a string index or key is associated with a value
 * this is NOT obvious, as we may still add props
 */

const nums = [1, 2, 3];

nums["name"] = "Numbers array";

console.log(nums.name);
// props may also be accessed using square bracket notation
console.log(nums["name"]); //either works, or appears to
//BUT:
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]); // string prop not in output!
}

console.log(nums); //[ 1, 2, 3, name: 'Numbers array' ]
console.table(nums);
/**(index) │     Values      │
├─────────┼─────────────────┤
│    0    │        1        │
│    1    │        2        │
│    2    │        3        │
│  name   │ 'Numbers array'
*/
console.log("using for of");
for (let num of nums) {
  console.log(num);
}
console.log("using forEach");
nums.forEach((el) => console.log(el));

console.log("using for in - meant for objects");
for (let key in nums) {
  console.log(key); //name
  //shows the associative property key name
}

console.log("using for in refactored to show values");
for (let key in nums) {
  console.log(nums[key]); //Numbers array
  //shows the associative property key name
}

// square bracket noattion can be used for dynamic prop naming

var full = "full";
var name = "Name";
var person = {};
person[full + name] = "Alan Lavender";
console.table(person);
