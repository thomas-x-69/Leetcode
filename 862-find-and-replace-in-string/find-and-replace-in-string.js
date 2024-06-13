/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {

        let res = s.split("");
    
    for(let i=0; i<indices.length; i++){
        
        const dx = s.substring(indices[i], indices[i] + sources[i].length);
        
        if(dx == sources[i]){
            
            res[indices[i]] = targets[i];
            
            let j = 1;
      while(j < dx.length)
                res[indices[i] + (j++)] = "";
                
        }
    }
    
    return res.join("");
};