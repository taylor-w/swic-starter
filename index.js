// The dynamic conversion of data is helpful... example:
const name = "";

// quickly check to see if a value is 'truthy' or 'falsey'
// For example, if I left the 'name' blank...
if (name) {
  console.log("User has entered value for name field");
} else {
  console.error("User has left name field blank");
}
