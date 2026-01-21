/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.toLowerCase().replace(/[^a-z\d]/g, '');
    let l = 0;
    let r = s.length -1;
    console.log(s)
    while(l<r)
    {
        if(s[l]!==s[r])return false
        l++
        r--
    }
    return true
};