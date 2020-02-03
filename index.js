// Tasks from Notion Text
const timeOfDay = "Morning";
let term = "Interpolation";

console.log(`Good ${timeOfDay}!`);

// Keyword typeof tells us what type of data it is we are working with.
// So we can have a template literal..
console.log(`This would be an example of Template Literals.`);

// However this would be an example of interpolation within a Template Literal
console.log(`Hi, I am an example of ${term}.`);

// COERCION is when JS will COERCE your data types into whatever if feels is appropriate.
console.log("hello" + 22); // Exemplifies this, is also Implicit Coercion
console.log(Number(false)); // Exemplifies Explicit Coercion
console.log(Boolean(222));

console.log(parseInt("123.45"));
console.log(parseFloat("123.45"));
// Implicit Coercion, JS does what it thinks is best. It reads the code as it sees fit.
// Explicit Coercion involves the user determining what should be done to the data.
