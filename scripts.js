// Functions Becoming Methods

/* A function in the global scope is a function, but becomes a method when
scoped within an object. */

// Example
function adder(num1, num2) {
  return num1 + num2;
}
console.log(`This is a function ${adder(3, 2)}`);

const basicMath = {
  subtractor: function(num1, num2) {
    return num1 - num2;
  }
};
console.log(`This is a method ${basicMath.subtractor(3, 2)}`);

/* Some syntax changes when functions become methods, but the process and rules of objects
are the same as before. How we reference methods within objects, how they make copies of
primitive data but make reference copies of objects. Nearly every rule as we know it to this
juncture, still holds water. */

/* NOTE: 'this' is a keyword that references another property within an object with that property
is going to be used by a method within the SAME object. With other languages and how we've been exposed to keyword 'this', it makes total sense. */

// Example
const me = {
  age: 24,
  weight: 175,
  hair: "brown",
  getOlder: function(years) {
    return this.age + years;
  },
  getYounger: function(years) {
    return this.age - years;
  },
  gainWeight: function(weight) {
    return this.weight + weight;
  },
  loseWeight: function(weight) {
    return this.weight - weight;
  }
};
console.log(me.getOlder(5));
console.log(me.gainWeight(10));
console.log("Found the Fountain of Youth");
console.log(me.getYounger(2));
console.log(me.loseWeight(5));
