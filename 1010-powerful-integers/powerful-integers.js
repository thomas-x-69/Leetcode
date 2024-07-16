/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
        let res = new Set()
         for(let xi = 1; xi < bound; xi *= x){
       for(let yj = 1; xi + yj <= bound; yj *= y){
           res.add(xi + yj);
           if(y == 1) break;
       }
       if(x == 1) break;
   } 
   return Array.from(res);
};