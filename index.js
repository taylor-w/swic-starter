const timeOfDay = "Good Morning, Vietnam!";
const greeting = `Howdy Neighbors and ${timeOfDay}`;
console.log(`${greeting}`);

let newVariable;
console.log(typeof newVariable); // We should expect undefined variable.
newVariable = "This variable was previously intentionally blank.";
console.log(typeof newVariable); // We should expect new assignment to reflect string data type.
// console.log(none); // 'none' is not a declared variable. Will result in broken execution.
console.log(`${greeting}`); // Because reference in line 9 is not defined, code does not execute at all.
const name = "Taylor";
let favoriteSong = "SOMEBODY by IDK";
let wage = 9.25;
let age = 24;
const onlyChild = false;
let satisfied = false;
let favoriteThing = "Life";
console.log(typeof favoriteThing);
favoriteSong = "BUSY by Saba";
favoriteThing = 39;
console.log(typeof favoriteThing);
age = 25;
wage = 25;
satisfied = true;
console.log(
  `${name}'s football number was ${favoriteThing}, and would love to work for ${wage} an hour.`
);
console.log(
  "This is an example of concatenation using " + "the plus sign operator."
);
