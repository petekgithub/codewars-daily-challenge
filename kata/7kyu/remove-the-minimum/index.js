/**
1-Find the smallest value in the array.
2-Remove the smallest element in the array.
3-Return the array without the smallest element.
 */


function removeSmallest(numbers) {
  const copy = numbers.slice(0)
  let smallestValueIndex = numbers.indexOf(Math.min(...numbers))
  copy.splice(smallestValueIndex, 1);
  return copy;
 }