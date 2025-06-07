/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let right = s.length - 1;
    return s == s.split("").reverse().join("")

};