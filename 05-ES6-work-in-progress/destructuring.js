/**
 * A destructuring assignment is a means of extracting
 * array elements OR object props
 * into multiple variables
 * it may also be used together with rest
 */

var nums = [1, 2, 3, 4, 5, 6];
const person = { name: "Bjørn", age: 81 };

// ES5
var n1 = nums[0];
var n2 = nums[1];
var n3 = nums[2];
var n4 = nums[3];
var n5 = nums[4];
var n6 = nums[5];

var name1 = person.name;
var age1 = person.age;

//ES6

const [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

const { name: bjornsname, age: bjornsage } = person; //destructured variable names have to match or alias actual property names
console.log(bjornsname, bjornsage);
