// Array Method Practice
const strAndNumArr = [1, 2, "Hello", 3, 4, "World", 5, "YoYo!"];
const strArr = [];
const numArr = [];

for (let i = 0; i < strAndNumArr.length; i += 1) {
  if (typeof strAndNumArr[i] === "string") {
    strArr.push(strAndNumArr[i]);
  } else {
    numArr.push(strAndNumArr[i]);
  }
}

console.log(strArr);
console.log(numArr);

// indexOf
// lastIndexOf
// includes

/* Pretty familiar with these methods, a lot of practice
utilizing this logic in other languages.*/

// TODO: Replace 'strawberry' with 'pumpkin'
// Array
const fruitArr = ["apple", "pineapple", "banana", "strawberry", "orange"];

// IF Element Exists
if (fruitArr.includes("strawberry")) {
  let strawIndex = fruitArr.indexOf("strawberry");
  fruitArr.splice(strawIndex, 1, "pumpkin");
} else {
  console.log("element: strawberry not found.");
}

console.log(fruitArr);
/* Load Index into new variable. NOTE: Could have used
  lastIndexOf instead, like below.*/
// fruitArr.splice(fruitArr.lastIndexOf("strawberry"), 1, "pumpkin");
// console.log(fruitArr);
