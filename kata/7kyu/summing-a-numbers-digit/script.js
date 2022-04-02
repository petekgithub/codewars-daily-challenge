
function sumDigits(number) {
  let numString = Math.abs(number).toString().split('');
  let sum = numString.reduce(function(a,b) {
    return parseInt(a) + parseInt(b)
}, 0);
  return sum;
}

