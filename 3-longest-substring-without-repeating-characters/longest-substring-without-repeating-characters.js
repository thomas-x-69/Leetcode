/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s ) {
    let map = new Set()
    let max = 0
    let left = 0
    for (right = 0; right < s.length; right++) {


        while (map.has(s[right])) {
            map.delete(s[left]);  
            left++;
        }
        map.add(s[right])

        max = Math.max(max,right- left +1)
    }

    return max
};