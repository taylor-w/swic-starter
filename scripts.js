// ARROW SYNTAX

// Function Declaration
function card(age) {}

// Function Expression
const card2 = function card(age) {
  age >= 21;
};

// Arrow Syntax
const cardArrow = age => age >= 21;
/* This arrow syntax allows one line code when there is only a single
statement in the function. */

/* Notice how the arrow => replaces the function keyword */
/* It's also important to note that the RETURN keyword is even more important than
before when using arrow syntax. Without that RETURN keyword, nothing is returned, so
the logged results are 'undefined'. */

const adder = (num1, num2) => {
  num1 + num2;
};
const correctAdder = (num1, num2) => {
  return num1 + num2;
};

console.log(cardArrow(11));
console.log(adder(2, 3));
console.log(correctAdder(2, 3));

/* The Arrow syntax requires less keystrokes, is up-to-date with ES2015, and is
more importantly, MR.Cleaaaan. */
