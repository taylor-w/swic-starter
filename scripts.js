// Sum the numbers in this ARRAY.
const nums = [51, 22, 33, 44, 511, 65, 7, 8, 9, 10];

function sumDaNumbers(nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
}

const totalOfNums = sumDaNumbers(nums);
console.log(totalOfNums);

/* Great example of array data being summed with a function.
The function nests a loop for the data, and calculates total per increment
of index, 'i'. */
