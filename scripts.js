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

// SHIFT METHOD
// Log
console.log(mapCallouts);
// Array Prototype Function: SHIFT
mapCallouts.shift(); // SHIFT removes first element from array, shifting elements to the left
// Log
console.log(mapCallouts);
// Check value RETURN from SHIFT
console.log(mapCallouts.shift());

// UNSHIFT METHOD
// Log
console.log(mapCallouts);
// Array Prototype Function: UNSHIFT
mapCallouts.unshift("mid"); // UNSHIFT adds element to first spot in array, shifting elements
// to  right
// Log
console.log(mapCallouts);
// Check value RETURN from UNSHIFT
console.log(mapCallouts.unshift("rockets"));

// SPLICE METHOD
// Log
console.log(mapCallouts);
// Array Prototype Function: SPLICE
mapCallouts.splice(1, 0, "sniper"); // SPLICE adds/removes element at desired index
// Log
console.log(mapCallouts);
// Check value RETURN from SPLICE
console.log(mapCallouts.splice(2, 1, "shotty"));

// Log
console.log(mapCallouts);

/* Final Thoughts: There's a remarkable amount of methods that come with the Array object. With some of these methods, creation of sorting algorithms is definitely possible. Always worth seeing what these methods return, provides more utility. */
