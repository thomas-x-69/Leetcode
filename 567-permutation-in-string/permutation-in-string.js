/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1 , s2) {
  if (s1.length > s2.length) return false;

    let s1Count = Array(26).fill(0);
    let s2Count = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }    

    for(let i=0;i<s2.length ;i++)
    {
        if(isMatch(s1Count,s2Count))return true
     s2Count[s2.charCodeAt(i) - 97]--;
     s2Count[s2.charCodeAt(i+s1.length) - 97]++;
    }
    return isMatch(s1Count, s2Count);
};

function isMatch(s1Count, s2Count)
{
    for(i=0;i<26;i++)
    {
        if (s1Count[i] !== s2Count[i]) return false;
    }
    return true

}
