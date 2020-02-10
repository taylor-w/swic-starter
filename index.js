const bio = {
  name: {
    fName: "Taylor",
    mName: "Johnson",
    lName: "Wood"
  },
  age: 24,
  hair: "brown",
  height: "70 Inches",
  weight: 175,
  addFiveYears() {
    return bio.age + 5;
  }
};
console.log(bio);
console.log(bio.age);
console.log(bio.name.fName, bio.name.mName, bio.name.lName);
console.log(bio.age + bio.weight);
bio.hair = "blonde";
console.log(bio.hair);
console.log(bio.addFiveYears(bio.age));

console.log(bio.name.fName); // This is an example of dotNotation
console.log(bio["name"]); // This is an example of bracketNotation - MUST have quotations if        referencing key within object.

const NewKey = "age";

console.log(bio[NewKey]); // This is interesting. We are using bracket notation to utilize our new const in order to search within our object. So our log is looking for our bio object, then using our new const, 'NewKey' which is "age" and looks for "age" within bio.
