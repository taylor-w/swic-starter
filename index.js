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
