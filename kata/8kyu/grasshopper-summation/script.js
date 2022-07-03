/**
 * 
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:
summation(2) -> 3
1 + 2
 */

// naive solution
var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// better solution
var summation = function (num) {
  return (num * (num + 1)) / 2;
};
