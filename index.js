// console.log(something); // Is NOT in memory
console.log(undefined); // Is a PRIMITIVE TYPE that signifies the absence of ANY value.

let x;
console.log(x); // Example of being undefined. We have the variable, but not assignment.
// NULL represents a deliberate assignment of 'nothing.' It is also a PRIMITIVE type.
x = null;

// THIS is a an OBJECT assigned to a const variable, 'me.'
const me = {
  name: "Taylor",
  age: 24,
  pets: {
    dog1: "Guiness",
    dog2: "Indie"
  }
};
console.log(me.name);
// Everything that's not a PRIMITIVE data type, is an OBJECT. This OBJECT structure is why .(dot) notation is so prevalent in the JS language.

// Create a new key value pair with age = 23.
// me.age = 23;
// console.log(me.age);

console.log(me.pets.dog2);
