
const maxSequenceuence = (arr) => {
  let maxSequence = 0;
  let currSequence = 0;
  for (const x of arr) {
    currSequence = Math.max(0, currSequence + x);
    maxSequence = Math.max(currSequence, maxSequence);
  }
  return maxSequence;
};