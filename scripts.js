// Using Date Constructor and Instance
const today = new Date();
const parsedDate = Date.parse(today);
const d = Date.parse("Apr 7 2020");
const d0 = Date.parse("7 April 2020 UTC");

console.log(today, parsedDate, d, d0);

/* At this point, we have one instance of Date() called 'today'
along with 3 different variables using the Date() constructor. */

// Showing our instance object
console.log(`Today is ${typeof today}`);

// Instance Object
console.log(today.getFullYear());
