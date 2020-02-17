console.log(49 === 49); // True because primitive data is compared by value.

const x = {
  name: "taylor"
};

const y = {
  name: "taylor"
};

console.log(x === y); // False because objects are compared by REFERENCE.
// X and Y have different memory addresses.

const z = x;

console.log(x === z);

// Moral of the story, do not use triple === for objects, composite data types.
