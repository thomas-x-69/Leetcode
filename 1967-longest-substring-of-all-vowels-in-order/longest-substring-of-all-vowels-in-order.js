/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
    let maxCount = 0
    let l = 0, r = 1
    let vowelCount = 1

    while (r < word.length) {
        let key_char = word[r]
        if (key_char < word[r - 1]) {
            vowelCount = 1
            l = r
        } else if (key_char > word[r - 1]) {
            vowelCount++
        }
        if (vowelCount === 5) {
            maxCount = Math.max(maxCount, r - l + 1)
        }
        r++
    }
    return maxCount
};