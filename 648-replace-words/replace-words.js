/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
        let arr = sentence.split(' ');
   for( i = 0; i < arr.length; i++){
       for( word of dictionary){
           if(arr[i].startsWith(word)){
               arr[i] = word;
           }
       }
   }    
   return arr.join(' ');
};