/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let res = []
    for(i=0;i<s.length;i++)
    {
        let l = i, r = i
        let counter = 0
        while(true)
        {
            if(s[i]==c)break

            if(l>0)
            {
            l --
            }
            if(r<s.length-1)
            {
            r ++
            }
            counter++
            if(s[l]==c||s[r]==c)break

        }
        res.push(counter)
    }
    return res
};