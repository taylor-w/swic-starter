// TODO: Example of Summation using a function that requires a start and end point.

// Function
function summation(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}

// Log Function
console.log(summation(14, 39));
