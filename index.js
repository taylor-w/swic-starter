// PASS by VALUE.
let x = 3;

let y = x;

console.log(y);

x = 4;

console.log(y);
// PRIMITIVE DATA TYPES CANNOT MUTATE!!
// Y is given the value of X, X changes, but Y's value is still the value of X the time of assignment.

// PASS by REFERENCE
const a = {
  name: "taylor",
  gender: "male"
};
// B will point to the same memory address as A.
// What happens to 1 will affect the other.
const b = a;
a.name = "Woody";

console.log(b.name);
