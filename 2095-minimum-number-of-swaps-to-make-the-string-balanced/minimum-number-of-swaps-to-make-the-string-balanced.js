/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(str) {
   let balance = 0,
        maxClose = 0;
    for(let s of str){
        s == ']'? balance++ : balance--;
        maxClose = Math.max(maxClose, balance);
    }
    return Math.ceil(maxClose/2)

};