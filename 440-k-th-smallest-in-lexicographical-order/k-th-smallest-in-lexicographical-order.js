/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
    let curr = 1;
    k--;
    while (k > 0) {
        let steps = count(n, curr, curr + 1);
        if (steps <= k) {
            curr += 1;
            k -= steps;
        } else {
            curr *= 10;
            k--;
        }
    }
    return curr;
};

function count(n, num1, num2) {
    let steps = 0;
    while (num1 <= n) {
        steps += Math.min(n + 1, num2) - num1;
        num1 *= 10;
        num2 *= 10;
    }
    return steps;
}