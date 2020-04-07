/* Thoughts: There's a remarkable amount of methods that come with the Array object. With some of these methods, creation of sorting algorithms is definitely possible. Always worth seeing what these methods return, provides more utility. */

// CONCAT METHOD
const arr1 = [1, 2, 3, 7, 8];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr1.concat(arr2));
/* Potential Merge Sort Algorithmic use? */

// INCLUDES METHOD
/* Similar to C#, boolean value */
console.log(arr3.includes(8));
console.log(arr3.includes(4));

// SLICE METHOD
/* Takes copy of array from (first point, to count) */
arr1.slice(1);
console.log(arr1.slice(1));
console.log(arr1);
arr1.slice(2, 4);
console.log(arr1.slice(2, 4));
console.log(arr1);

/* SLICE doesn't mutate array data, but SPLICE does */
