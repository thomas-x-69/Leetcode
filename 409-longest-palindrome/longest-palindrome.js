/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
     let freqMap = {};
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    let res = 0;
    let oddFreq = false;
    for (let char in freqMap) {
        let freq = freqMap[char];
        if (freq % 2 === 0) {
            res += freq;
        } else {
            res += freq - 1;
            oddFreq = true;
        }
    }
    if (oddFreq) {
        res += 1;
    }
    return res;
};