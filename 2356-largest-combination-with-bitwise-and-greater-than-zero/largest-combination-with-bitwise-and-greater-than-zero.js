/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
     let arr = new Array(32).fill(0);
    for (i = 0; i < arr.length; i++) {
        for (let e of candidates) {
            if ((e & (1 << i)) != 0) {
                arr[i]++;
            }
        }
    }
    return Math.max(...arr);
};