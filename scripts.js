// TODO: Example of Summation using a function that requires a start and end point.
// TODO: Homework, add increment parameter.

/* This function is declared as 'summation' with 3 parameters.
Parameter 1, 'start' the number to start counting from.
Parameter 2, 'end' the number to stop count at when reached.
Parameter 3, 'increment' the number we increment by each time when counting. */

// Function
function summation(start, end, increment) {
  // A variable to hold our 'total' that we will add the sum to and return.
  let total = 0;
  /* We do not have to reinitialize 'increment' for it's receiving it's value
  from the passing of an argument. We are going to count by 'increment' number, starting with
  'start' value passed by argument. As long as that 'start' number is less than or equal
  to end, this is our condition, we will count by 'increment.' As we add 'increment' value
  to 'start' value, 'start' value changes each loop, we also take 'total' and sum each iteration
  of 'start' value. */
  for (increment; start <= end; start += increment) {
    /* Log start through each loop to see the 'start' value
    and how it changes through each condition check. While that
    start counts to the 'end' point, we 'store' and add each value
    of 'start' to 'total'. */
    console.log(start);
    total += start;
  }
  /* Loop is finished, we will now RETURN the 'total' of all the numbers within the range 'start - end'. Essentially, ever number that appears within the condition check that we saw while counting by 'increment' will be summed and returned. */
  return total;
}

// Log Function
console.log(summation(1, 10, 4));
