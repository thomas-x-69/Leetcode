/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let freq = {}
    let l = 0
    let res = 0
    for (let r = 0; r < s.length; r++) {

       while (freq[s[r]]) {
            delete freq[s[l]]
            l++
        }
        freq[s[r]] = 1
        
        res = Math.max(res, r - l + 1)
    }
    return res
};