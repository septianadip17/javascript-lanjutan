// //Syntax
// array.filter(function(currentValue))
// array.filter(function(currentValue, index, arr),thisValue)
// //index: optional
// //array: optional
// //thisValue: optional

//example
let numbers = [1,2,3,4,5,6];
let evenNums = numbers.filter((num) => num % 2 == 0);
console.log(evenNums); //[2,4,6]

//example
let names = ["John", "Alice", "Bob", "David"];
let lengthNames = names.filter((name) => name.length == 5);
console.log(lengthNames); //["Alice", "David"]

// example
let ary = [{name: "John", age: 25}, {name: "Alice"}, {age: 30}];
let filteredArr = ary.filter((obj) => obj.hasOwnProperty("age"));
console.log(filteredArr); //[{}]