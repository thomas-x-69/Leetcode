/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
     let res = 0;
    let uniq = new Set(s);

    for (let c of uniq) {
        let start = s.indexOf(c);
        let end = s.lastIndexOf(c);

        if (start < end) {
            res += new Set(s.slice(start + 1, end)).size;
        }
    }

    return res;   
};