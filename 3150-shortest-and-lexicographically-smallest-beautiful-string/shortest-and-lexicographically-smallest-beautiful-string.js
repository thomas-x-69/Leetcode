/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
  let l = 0, r = 0, ones = 0, res = '';
    
    while (r < s.length) {
        if (s[r] == 1) ones++;
        r++;
        
        while (ones > k || (ones == k && s[l] == 0)) {
            if (s[l] == 1) ones--;
            l++;
        }
        
        if (ones == k) {
            let current = s.slice(l, r);
            if (!res || current.length < res.length || 
                (current.length == res.length && current < res)) {
                res = current;
            }
        }
    }
    
    return res;
};