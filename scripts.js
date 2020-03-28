const sayHello = function sayHello() {
  console.log(arguments);
};

sayHello("hello", "bye", "hi", "world");
// We've done this before, but this just uses 'arguments' keyword to log arguments passed by function.

const sayBye = function(...args) {
  console.log(args[0]);
};

sayBye("Goodbye, my friend.");
// Above we have the rest operator. It's notified by the '...'
// We make up a word to hold the 'array' of arguments. ex. 'args'.

const greeting = function greeting(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
};

greeting("howdy", "heyheyhey", "whadup");
// Assigning our own parameters, we can call to a specified parameter we create.

const introduction = function(n) {
  console.log(`Hi ${n}, my name's Taylor.`);
};
const name = prompt("What is your name?");

introduction(name);
// Another example of a parameter (n) that we created for the function 'introduction'.
