/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let max = 0,
    i = 0;
  let frequency = {};
  while (i < s.length + 1 - minSize) {
    let word = s.slice(i, i + minSize);
    let wordSet = new Set(word);
    if (wordSet.size <= maxLetters) {
      if (frequency[word] == undefined) frequency[word] = 0;
      frequency[word] += 1;
      max = Math.max(max, frequency[word]);
    }
    i += 1;
  }
  return max;
};