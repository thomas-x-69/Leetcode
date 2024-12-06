/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let res = 0;
  let sum = 0;
  for ( i = 1; i <= n; i++) {
    if (!banned.includes(i) && sum + i <= maxSum) {
        res++;
        sum += i;
    }
  }
  return res;
};