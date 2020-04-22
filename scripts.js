// variable to hold element passed to querySelector
const uname = document.querySelector("#username");
const email = document.querySelector("#email");

// focus event
uname.addEventListener("focus", () => {
  console.log("Entered input!");
});
// blur event
email.addEventListener("blur", () => {
  console.log("Left input!");
});
// keydown event
email.addEventListener("keydown", e => {
  console.log(`Currently typing in: ${e.target}`);
});

document.querySelector("form").addEventListener("submit", e => {
  // Call "submit" event, 'e', and access function to prevent default 'event' functionality
  e.preventDefault();
  console.log("I am still here! The browser will not get rid of me!");
  console.log("What's this 'submit event' stuff look like anyway?", e);
  // check values logged on submission
  console.log(uname.value);
  console.log(email.value);
  // getter example
  console.log(document.querySelector("p").textContent);
  // setter example
  document.querySelector("p").textContent = `${uname.value} - ${email.value}`;
});
