/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    s= s.split("")
    let res = []
    let count = 1
    for(i=0;i<s.length;i++)
    {

       if(s[i]==s[i-1])count++
       else if(s[i]!=s[i-1])count=1
       if(count<=2)res.push(s[i])
    }
return res.join("")
};