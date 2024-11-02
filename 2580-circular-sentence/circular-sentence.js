/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let arr = sentence.split(" ")
    let Circular  = true
    if(arr.length ==1 )
    {
        if(arr[0][0]===arr[0][arr[0].length-1])
        {
            return Circular
        }else 
            return false
    }
    for(i=1;i<arr.length;i++)
    {
        if(arr[i].split("")[0]!==arr[i-1].split("")[arr[i-1].length-1])
        {
            Circular =false
        }
    }
    if(arr[arr.length-1][arr[arr.length-1].length-1]!==arr[0][0])
    {
            Circular =false
    
    }
    return Circular
};