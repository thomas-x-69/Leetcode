/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sm = nums.reduce((a, b) => a + b, 0);
    if (sm < Math.abs(target) || (sm + target) % 2 !== 0) return 0;
    let totalsum = (sm + target) / 2;

    let dp = Array(totalsum + 1).fill(0);
    dp[0] = 1;

    for (let num of nums) {
        for (let T = totalsum; T >= num; T--) {
            dp[T] += dp[T - num];
        }
    }
    return dp[totalsum];
};