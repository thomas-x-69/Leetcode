/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(" ")
    console.log(arr)
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].startsWith(searchWord))
        {
             return i+1
            
        }
        
            
    }
    return -1
  
};