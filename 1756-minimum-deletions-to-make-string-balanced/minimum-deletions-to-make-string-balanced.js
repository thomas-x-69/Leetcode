/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    let dp1 = [], counter = 0;
    for (let i = 0; i < s.length; i++) {
        dp1[i] = counter;
        if (s[i] === 'b') counter++
    }

    counter = 0;
    let dp2 = [];
    for (let i = s.length - 1; i >= 0; i--) {
        dp2[i] = counter;
        if (s[i] === 'a') counter++;
    }

    let min = s.length;
    for (let i = 0; i < s.length; i++) {
        min = Math.min(min, dp1[i] + dp2[i]);
    }
    return min;
};