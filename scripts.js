// Constructor Functions

/* This isn't the first time we've come across the 'constructor' word in
programming. C# has it, when you create a new instance of some object, and
it seems to be used likewise here in Javascript.*/

function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;

  this.getFullName = function() {
    return `${fname} ${lname}`;
  };
}
console.log(Person);
/* At this point, it's just a function. It's being set up to create or
CONSTRUCT new objects */

const taylor = new Person("Taylor", "Wood");
console.log(taylor);
/* Now we have create a new INSTANCE of the Person function with the keyword 'new'.
Notice the log of 'taylor'. It shows the same format of contents within 'Person',
but grabbed the values provided from 'taylor' because the 'this' keyword within the
constructor function. */
console.log(taylor.getFullName());
