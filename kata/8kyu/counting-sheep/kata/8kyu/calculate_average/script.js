/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
  let result = array.reduce((sum,current) => sum + current,0)
  return result / array.length || 0;
}