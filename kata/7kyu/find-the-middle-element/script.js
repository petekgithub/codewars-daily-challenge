/**
 As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).


*/

// P.R.E.P
//P (parameters): Is it always going to be integers? Does that number always fit between the others?
//R (return): Returns the index of the numbers found
//E (examples): If we are given [2,3,1], should return 0 (index of 2). Because 2 is between the 3 and 1
// If we are given [5,10,14], should return 1 (indeks of 10).
//P (pseudo code):
//Make a function that takes an array
//iterate through the array and sort then find the between number
// return that numbers index (indexOf)

function gimme(triplet) {
  const newOnes = [];
  for (let i of triplet) {
    newOnes.push(i);
  }
  const sorted = newOnes.sort((a, b) => a - b);
  return triplet.indexOf(sorted[1]);
}
