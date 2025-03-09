/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let n = colors.length
    let count = 1
    let result = 0;

    for (let i = 0; i < n + k - 2; ++i) {
        if (colors[i % n] !== colors[(i + 1) % n]) {
            count++;
        } else {
            count = 1;
        }
        result += (count >= k) ? 1 : 0;
    }

    return result;


};