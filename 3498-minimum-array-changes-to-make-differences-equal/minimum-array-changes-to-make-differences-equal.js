/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {
   const n = nums.length;
  const map = {};
  for (let i = 0; i < n / 2; i++) {
    const abs = Math.abs(nums[i] - nums[n - 1 - i]);
    map[abs] = (map[abs] || 0) + 1;
  }
    const preSum = new Array(k + 1).fill(0);
    for (let i = 0; i < n / 2; i++) {
    preSum[0]++;

    const a = nums[i];
    const b = nums[n - 1 - i];
    const maxDiff = Math.max(a, b, k - a, k - b);
    if (maxDiff + 1 <= k) preSum[maxDiff + 1]++;
  }
  let ans = Infinity;
  let sum = 0;
  for (let i = 0; i <= k; i++) {
    sum += preSum[i];
    ans = Math.min(ans, sum - (map[i] || 0));
  }

  return ans;};