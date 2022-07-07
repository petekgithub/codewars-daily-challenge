function diamond(n){
  if ( n < 1 || n % 2 === 0 ) return null
  let result = '', middle = Math.ceil(n/2);
  for ( let i = 1; i <= n; i++ ) {
    if ( i <= middle ) {
      result += ' '.repeat(middle-i) + '*'.repeat(2*i-1) + '\n'
    } else {
      result += ' '.repeat(i-middle) + '*'.repeat(2*(n-i)+1) + '\n'
    }
  }
  return result;
}