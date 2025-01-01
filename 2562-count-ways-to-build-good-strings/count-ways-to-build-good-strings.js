/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const MOD = 1e9 + 7;
    let ways = new Array(high + 1).fill(0);
    ways[0] = 1;

    for (let length = 0; length <= high; length++) {
        if (ways[length] === 0) continue;
        if (length + zero <= high) {
            ways[length + zero] = (ways[length + zero] + ways[length]) % MOD;
        }
        if (length + one <= high) {
            ways[length + one] = (ways[length + one] + ways[length]) % MOD;
        }
    }

    let count = 0;
    for (let i = low; i <= high; i++) {
        count = (count + ways[i]) % MOD;
    }

    return count;
};