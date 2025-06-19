/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s2, s1) {
 let arr = []

    let s1Count = Array(26).fill(0);
    let s2Count = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }    

    console.log(s1Count, s2Count)

    for(let i=0;i<s2.length ;i++)
    {
        for(j=0;j<26;j++)
    {
        if (s1Count[j] !== s2Count[j]) break
    }
    if(j==26)arr.push(i)
     s2Count[s2.charCodeAt(i) - 97]--;
     s2Count[s2.charCodeAt(i+s1.length) - 97]++;
    }
    return arr
};
