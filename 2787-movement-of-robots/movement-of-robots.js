/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function(nums, s, d) {
   let sum = 0;
    let n = nums.length;
    nums = nums.map((val, i) => (s[i] === "L" ? val - d : val + d));
    nums.sort((a, b) => a - b);
    
    let prefixSum = Array(n).fill(0);
    prefixSum[0] = nums[0];
    
    for (let i = 1; i < n; i++) {
        prefixSum[i] = (prefixSum[i - 1] + nums[i]) % 1000000007;
    }
    
    for (let i = 1; i < n; i++) {
        sum = (sum + i * nums[i] - prefixSum[i - 1]) % 1000000007;
    }
    
    return sum;
};