/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, [D, W, M]) => {
  const dp = new Array(days.at(-1) + 1);
  for (let i = 1; i < dp.length; i++) {
    if (days.includes(i)) {
        dp[i] = Math.min(~~dp[i-1] + D, ~~dp[i-7] + W, ~~dp[i-30] + M);
    } else {
        dp[i] = dp[i - 1];
    }
  }
  return dp.at(-1);
};