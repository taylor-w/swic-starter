// Fizz! Buzz! FizzBuzz!
for (let i = 0; i <= 100; i++) {
  if (!(i % 3) && !(i % 5)) {
    console.log("FizzBuzz!");
  } else if (!(i % 3)) {
    console.log("Fizz!");
  } else if (!(i % 5)) {
    console.log("Buzz!");
  } else {
    console.log(i);
  }
}
// Empty Object
const emptyObject = {};

// Object is empty, so 'isConfirmed' logs back 'undefined.'
// Now, we use Window object's method 'confirm.'
// IF user selects OK, then isConfirmed received boolean response of TRUE, which makes it exist within 'emptyObject.'
// ELSE user selects CANCEL, so FALSE is filled within isConfirmed key instead, which still makes it exist within 'emptyObject,' but with a different value.

emptyObject.isConfirmed = window.confirm();

// Logging value of emptyObject
console.log(emptyObject);
// Logging value of isConfirmed key within emptyObject

// We need to be in browser to recognize global object, 'Window,' so we receive undefined.
// References afterwards never exist since isConfirmed key never received value.
