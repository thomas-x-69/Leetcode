/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    if (k === 0) return Array(n).fill(0);

    let isReversed = false;

    if (k < 0) {
        code.reverse();
        k = -k;
        isReversed = true;
    }

    const pre = new Array(n).fill(0);
    pre[0] = code[0];
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] + code[i];
    }

    const res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (i + k < n) {
            res[i] = pre[i + k] - pre[i];
        } else {
            res[i] = (pre[n - 1] - pre[i]) + pre[(i + k) % n];
        }
    }

    if (isReversed) {
        res.reverse();
    }

    return res;
};