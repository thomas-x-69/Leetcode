/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
      let maxSub = "";
      
    for (let i = 0; i < s.length; i++) {
        let sub = s.substring(i); 
        if (sub > maxSub) {     
            maxSub = sub;     
        }
    }

    return maxSub;

};