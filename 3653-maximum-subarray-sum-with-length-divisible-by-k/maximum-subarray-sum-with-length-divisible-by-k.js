/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    let prefix = [0];

    for(let i = 0; i < nums.length; i++){
        prefix[i + 1] = prefix[i] + nums[i];
    }
    let dp = new Array(nums.length + 1).fill(-Infinity)

 for(let i = k; i < prefix.length; i++){
        dp[i] = (prefix[i] - prefix[i-k]) + Math.max(0, dp[i-k]);
    }

    return Math.max(...dp);};