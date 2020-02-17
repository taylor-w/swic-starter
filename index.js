let a = 39;
let b = a;
console.log(b);

a = 14;
console.log(b);

b = a;
console.log(b);
// Notice how PRIMITIVE handle PASS of VALUE.

const x = {
  name: "Taylor",
  gender: "Male"
};
const y = x;
console.log(y);

const z = {
  name: "Taylor",
  gender: "Male"
};
console.log(x === y);
console.log(x === z);

x.name = "Woody";
console.log(y.name);
console.log(z.name);
// Notice how COMPOSITE handle PASS of REFERENCE.
