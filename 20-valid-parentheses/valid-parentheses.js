/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let res = []
    for(let i=0;i<s.length;i++)
    {
        if((s[i]==")")&&res[res.length-1]=="("
        ||(s[i]=="]")&&res[res.length-1]=="["
        ||(s[i]=="}")&&res[res.length-1]=="{"
        )
        {
            res.pop()
        }else{
            res.push(s[i])
        }
    }

    return res.length==0
};