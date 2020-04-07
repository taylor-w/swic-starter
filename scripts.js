// Using Different Methods of Array Prototype
// Array
const mapCallouts = ["top mid", "bot mid", "lift landing"];

// PUSH METHOD
// Log
console.log(mapCallouts);
// Array Prototype Function: PUSH
mapCallouts.push("gold one"); // PUSH element into array
// Log
console.log(mapCallouts);
// Check value RETURN from PUSH
console.log(mapCallouts.push("gold one")); // RETURNS Array.length

// POP METHOD
// Log
console.log(mapCallouts);
// Array Prototype Function: POP
mapCallouts.pop(); // POP removes last element from array
// Log
console.log(mapCallouts);
// Check value RETURN from POP
console.log(mapCallouts.pop()); // RETURNS Element it Removes
