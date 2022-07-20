
function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let lowerStr = string.toLowerCase();
  for(let i = 0; i < alphabet.length-1; i+=1) {
    if(lowerStr.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

// better version
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}