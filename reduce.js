// //Syntax
// array.reduce(callback[,initialValue])
// array.reduce(function (total,currentValue, currentIndex, arr), initialValue)
// //total* Required
// //The initialValue. or the previously returned value of the function

// //currentValue* Required
// //The value of the current element.

//example
let nums = [1, 2, 3, 4, 5, 5];
let sum = nums.reduce((result, item) => result + item);
console.log(sum); //20

//example
let string = ["Hello", "", "World!"];
let concat = string.reduce((result, item) => result + item);
console.log(concat); //Hello World

//example | (Max Number in array)
function maxNum(numbers) {
  return numbers.reduce((max, current) => {
    if (current > max) {
      return current;
    }
    return max;
  }, number[0]); 
}


let numb = [4, 2, 9, 7, 5];
let maxNumber = maxNum(numb);
console.log(maxNumber) //9