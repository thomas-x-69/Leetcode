/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function(s, k) {
    let count = 0;
 
    for(let i=0;i<s.length;i++) {
        let obj = new Map();
       for(let j=i;j<s.length;j++) {
            obj.set(s[j], (obj.get(s[j]) || 0) +1);
             for (let value of obj.values()) {
                if(value >= k) {
                    count ++;
                    break;
                }
            }
        }
        
    }

    return count;

};