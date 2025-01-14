/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let counter = 0
    let map = {}
    let res = []
    for(i=0 ; i < A.length ; i++)
    {
        
        map[A[i]]? map[A[i]]+=1 : map[A[i]]=1
        map[B[i]]? map[B[i]]+=1 : map[B[i]]=1
        
        if (map[A[i]]>1) counter++
        if(A[i]!=B[i]&&map[B[i]]>1)  counter++
       res.push(counter)
    }
    return res
};