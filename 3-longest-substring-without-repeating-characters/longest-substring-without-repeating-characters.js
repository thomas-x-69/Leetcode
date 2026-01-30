/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
   
    let freq = {}
    let l = 0
    let res = 0
    for (let r = 0; r < s.length; r++) {

        if (!freq[s[r]]) {
            freq[s[r]] = 1
            
        } else {
          
                delete freq[s[l]]
                l++
                r--
            }
         res = Math.max(res, r-l+1)
    }
    return res
};