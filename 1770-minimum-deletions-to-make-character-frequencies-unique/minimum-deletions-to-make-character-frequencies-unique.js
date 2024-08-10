/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let freq = {}
    let res = 0
    for(str of s)
    {
        freq[str]?freq[str]++:freq[str]=1
    }
    let arr = Object.values(freq).sort((a,b)=>b-a)
    console.log(arr)
    for(i=1;i<arr.length;i++)
    {
     if(arr[i]==arr[i-1]&&arr[i]!=0)
     {
        arr[i]--
        res++
        arr.sort((a,b)=>b-a)
        i=0
     }
    }
    return res
};