function correct(string) {
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '5') string[i] = 'S';
    if (string[i] === '0') string[i] = 'O';
    if (string[i] === 1) string[i] = 'I';
  }
  return string.join('');
}
