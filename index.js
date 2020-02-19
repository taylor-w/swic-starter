let x = 1;
let sum = 0;

while (x <= 10) {
  sum = sum + x;
  x++;
}
console.log(sum);

let num = 1;
let total = 100;
while (num <= total) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz!");
  } else if (num % 3 === 0) {
    console.log("Fizz!");
  } else if (num % 5 === 0) {
    console.log("Buzz!");
  } else {
    console.log(num);
  }
  num += 1;
}
// Examples of While loops. Notice Initializing, Conditional placements, and Incremention.
