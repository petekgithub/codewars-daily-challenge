function getSum(a,b){

  let count = 0;
  if(a===b)return a;
  if(a<b){
    for(; a<=b; a++) {
      count += a;
    }   
  }else if(b<a){
    for(; b<=a; b++){
      count +=b;
    }
  }
  return count;
}

// clever ones:
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}