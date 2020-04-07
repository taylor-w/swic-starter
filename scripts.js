// Array is a FUNCTION CONSTRUCTOR
const myArr = [1, 2, 3];

const myArr2 = new Array();
// Array Prototype has a built in function, push();
myArr2.push(1, 2, 3);

myArr.push(39);

console.log(myArr, myArr2);
