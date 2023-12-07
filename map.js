// //Syntax
// array.map(function(currentValue))
// array.map(function(currentValue, index, arr),thisValue)
// //index: optional
// //array: optional
// //thisValue: optional

//example
let number = [1,2,3];
let newNumbers = number.map((num) => num + 1);
console.log(newNumbers); //[2,3,4]

//example
let fruits = ["apple", "banana", "cherry"];
let capitalFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(capitalFruits); //[ 'APPLE', 'BANANA', 'CHERRY' ]

//example
let nums = [2,3,4];
let sqrtArr = nums.map((num) => num * num);
console.log(sqrtArr); //[4,9,16]