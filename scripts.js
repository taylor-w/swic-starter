// Final Function Thoughts and Homework

// Function Declaration
function sayingGenerator() {
  const phrase = "Heeeeey, it's the Fonz."; // Locally scoped variable
  const p = "heck";
  console.log(p);
  return phrase;
}

// console.log(phrase); // Error because we are trying to pull a local variable of 'sayingGenerator()' to a global setting.

const saying = sayingGenerator();
// saying(); // Will error because function is not a function. No need to invoke();
saying;
console.log(saying);

function valueLogger(value) {
  console.log(value);
}

valueLogger(); // Undefined because no argument is being passed.

valueLogger("Howdy ho, neighborino!");

valueLogger(3 + 7); // Will actually give value

valueLogger(3, 7);

function doubler(num) {
  return num * 2;
}

const shouldBeTen = doubler(5);
console.log(shouldBeTen);

function doubleValueLogger(value1, value2) {
  console.log(value1, value2);
}

doubleValueLogger("hello", "how are you");

doubleValueLogger("hello");

function add(num1, num2) {
  return num1 + num2;
}

const sum = add(7, 12);

console.log(sum);
