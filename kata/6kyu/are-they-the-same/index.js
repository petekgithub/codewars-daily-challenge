// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// To compare numbers instead of strings(for string, it works UTF16), the compare function can subtract b from a.
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); 
  array2.sort((a, b) => a - b);
  return array1.map(x => x * x).every((x, i) => x == array2[i]);
}