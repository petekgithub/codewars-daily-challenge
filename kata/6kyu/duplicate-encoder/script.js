/**
 The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
 */

function duplicateEncode(word) {
  var letters = word.toLowerCase().split('');
  return letters
    .map(function (c, i) {
      return letters.some(function (x, j) {
        return x === c && i !== j;
      })
        ? ')'
        : '(';
    })
    .join('');
}
