//TODO: Using only the functions above, and no operators, calculate the value of tripling 5, multiplying that by 12, dividing that by 2 and then finding the remainder of dividing that by 3.

function tripler(num) {
  return num * 3;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

let tripled = tripler(5);
console.log(tripled);
let product = multiply(tripled, 12);
console.log(product);
let quotient = divide(product, 2);
console.log(quotient);
let remain = remainder(quotient, 3);
console.log(remain);

let answer = remainder(divide(multiply(tripler(5), 12), 2), 3);
console.log(answer);

/* Example above demonstrates two major factors.
The first being function call. Very direct, clean use
of function declaration and calling to retrieve function
and get answer.
The second being scope. More specifically on lines 28, 29, we
display parent/child scope to retrieve answers of functions
and display them within other functions. */
