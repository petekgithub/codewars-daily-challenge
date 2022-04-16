/**
 *
 Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
 
 */

//The Math.abs() method returns the absolute value of a number
 function invert(array) {
  return array.map((value) => (Math.abs(value) >= 0 ? value * -1 : value));
}
 
// best
function invert(array) {
  return array.map( x => x === 0 ? x : -x);
}
