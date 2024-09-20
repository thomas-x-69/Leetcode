/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    const palindromeStr = s.split("").reverse().join("");
    
    if (s === palindromeStr) {
        return s;
    }

    for (let i = 0; i < s.length; i++) {

        if (s.substring(0, s.length - i) === palindromeStr.substring(i)) {
            return palindromeStr.substring(0, i) + s;
        }
    }
    return "";
};