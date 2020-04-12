// DESTRUCTING
/* We can extra/pull data from arrays, properties from objects, using DESTRUCTING */

const intro = ["Hello", "I", "am", "Taylor"];
const greet = intro[0];
const name = intro[3];
console.log(greet, name);

// Big Review, assigning value at specified element within array to variable.

const [greeting, pronoun] = intro;
console.log(greeting);
console.log(pronoun);

/* On line 12, we assign 'greeting' and 'pronoun' to their respective locations within the array, 'intro'. This is an introductory version of using DESTRUCTING */

/* Another way of doing the same thing. */

const [greeting2, , , name2] = intro;
console.log(greeting2);
console.log(name2);

/* The commas ', , ,' skip elements within the array. */

const [, pronoun2, , name3] = intro;
console.log(pronoun2);
console.log(name3);

/* Comma skips element, assigns element to variable. another comma separates the first variable from the second variable assignment, same comma logic applies. */

const [greeting3, ...intro2] = intro;
console.log(greeting3);
console.log(intro2);

/* Using the 'rest' to assign multiple elements into a new variable. */

/* You can use Default Values to default values to variables  */

const [sayingHi = "hi", exName = "tay"] = ["hello"];
console.log(sayingHi);
console.log(exName);

/* First element in array assigned to first variable, second element doesn't exist in array so the default value assigned to 'exName' is used. */

let a = 3;
let b = 6;

[a, b] = [b, a];

console.log(a);
console.log(b);
