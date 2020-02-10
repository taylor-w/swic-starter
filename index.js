let age = 21;
const legalAge = 18;
const rentalAge = 25;

if (age < legalAge) {
  console.log("You can't rent a car, my friend!");
} else {
  console.log("Hey, you can rent a car!");
  if (age < rentalAge) {
    console.log("Renting a car is going to be expensive, my friend!");
  } else {
    console.log("Renting a car won't be too bad, my friend!");
  }
}
