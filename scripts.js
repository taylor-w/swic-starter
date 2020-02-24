// Log the numbers from 1 to 10.
// FOR limits use of local variable
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Log Fizz, Buzz, FizzBuzz!
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz!");
  } else if (i % 3 === 0) {
    console.log("Fizz!");
  } else if (i % 5 === 0) {
    console.log("Buzz!");
  } else {
    console.log(i);
  }
}
// Log Summonation
let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
  console.log(total);
}
