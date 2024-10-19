/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
     if (n === 1) return '0';
    let len = 2 ** n;
    if (k < len / 2) return findKthBit(n - 1, k);
    if (k > len / 2) return findKthBit(n - 1, len - k) === '0' ? '1' : '0';
    return '1';
};