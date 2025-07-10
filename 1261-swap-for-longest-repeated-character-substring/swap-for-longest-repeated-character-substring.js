/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {

    const count = new Map();
    for (let char of text) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    
    let maxLen = 0;
    
    for (let [char, charCount] of count) {
        let left = 0;
        let nonCharCount = 0; 
        
        for (let right = 0; right < text.length; right++) {
            if (text[right] !== char) {
                nonCharCount++;
            }
            
            while (nonCharCount > 1) {
                if (text[left] !== char) {
                    nonCharCount--;
                }
                left++;
            }
            
            const windowLen = right - left + 1;
            const actualLen = Math.min(windowLen, charCount);
            maxLen = Math.max(maxLen, actualLen);
        }
    }
    
    return maxLen;
    

};