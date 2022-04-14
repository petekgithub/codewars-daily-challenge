/**
 * 
 Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s) {
  let seperate = s.split(' ');
  let smallest = seperate[0];
  for(let i = 0; i < seperate.length; i++) {
    if(seperate[i].length < smallest.length){
      smallest = seperate[i]
    }
  }
  return smallest.length
}
