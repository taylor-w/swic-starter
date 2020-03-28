const name = "Taylor";
function greet(n) {
  return `Hello ${n}`;
}
const greeting = greet(name);
console.log(greeting);

function greeter() {
  return "Hello";
}
const greeting2 = greeter();
console.log(`${greeting2}, nice to meet you.`);
// Example of return values
// Notice function being assigned to a variable so they can be invoked at will.
