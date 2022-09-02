const getRealFloor = (n) => (n>13 ? n-2 : (n > 0 ? n-1 : n))

// another ones:
const _getRealFloor = n => {
  if(n >= 13) return n - 2
  if(n > 0) return n - 1
  return n
}