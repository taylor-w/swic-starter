// IMPLICIT CONVERSION - Where Javascript changes things for you, even if you don't want it.

// If first EXPRESSION is 'truthy,' then we don't EVALUATE the right hand-side.

// If 'prompt' RETURNs and empty STRING - b/c of the '||' this will be
// IMPLICITLY CONVERTED to 'false.'

// 'game' will be a STRING, but it could be blank.
let game = prompt("What game are you playing?");

// If 'game' is blank, then '!' will convert to a Boolean (NOT FALSE)
// If 'game' is not blank, then '!' will convert to a Boolean (NOT TRUE)
while (!game) {
  game = prompt("What game are you playing?");
}

console.log(name);
