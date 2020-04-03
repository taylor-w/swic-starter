// Prototypes

/* We use PROTOTYPES to extract a collection of properties and
methods for reuse within specific instances. This leads to the
main purpose of Object Oriented Programming. Javascript handles
OOP with Prototypes. */

// Constructor Function with some properties removed:
function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

/* We use the Person Constructor in conjunction with the PROTOTYPE
keyword to share the properties of our Constructor Function */
Person.prototype.getFullName = function() {
  return `${this.fname} ${this.lname}`;
};

const taylor = new Person("Taylor", "Wood");
const eddie = new Person("Eddie", "Murphy");
console.log(taylor);
/* At this point, it's similar to our Constructor Function notes, but
we haven't copied the getFullName function into every NEW instance.
This saves memory! */

console.log(taylor.getFullName());
/* Now we can access the Prototype Function on a need basis to save
memory, and make unique use of the Prototype Function as needed.
This, is the beauty of Object Oriented Programming. The need and ease
of access, to better serve our programming/design needs. */
taylor.getFullName = function() {
  return "Woody - There's a snake in my boot!";
};
console.log(taylor.getFullName());
console.log(eddie.getFullName());

/* We used the Prototype function three times in our log statements.
And even changed it as desired for 'taylor', but kept it's original
assignment and use for 'eddie'. Our Prototype Function has a 'designed'
purpose, but can change on case to case assignment. NOTE: Don't lose
track of assignment - this is Javascript's duality.*/
