/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if(s.length !== t.length)return false
    let arr1 = new Array(26).fill(0)
    let arr2 = new Array(26).fill(0)

    for(i=0;i<s.length;i++)
    {
        arr1[s[i].charCodeAt(0)-97]++
        arr2[t[i].charCodeAt(0)-97]++
    }

    return arr1.every((value, index) => value === arr2[index]);


};