/**
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

*/


// naive solution
function countPositivesSumNegatives(input) {
  const answer = []
  let positiveSum = 0
  let negativeSum = 0

  if(input && input.length) {
    for(let i = 0; i < input.length; i++) {
      if(input[i] > 0) {
          positiveSum += 1
      } else {
          negativeSum += input[i]
      }
    }
    answer.push(positiveSum)
    answer.push(negativeSum)
  }
  return answer
}

// with reduce
function countPositivesSumNegatives(input) {
  return (input && input.length >= 1) 
    ? input.reduce((acc, n) => {
        n > 0 ? acc[0]++ : acc[1] += n;
        return acc;
      }, [0, 0]) 
  : [];
}

