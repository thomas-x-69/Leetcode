/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let s = [...arr].sort((a, b) => a - b);
    let ind = -1, c = 0;
    for (let i = 0; i < arr.length; i++) {
        ind = Math.max(ind, s.indexOf(arr[i]));
        if (ind === i) {
            c++;
        }
    }
    return c;
};