/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let n = nums.length;
    let sum = nums.reduce((r, n) => r + n);

    let current = 0;
    let ans = -1;

    for (l = 0, r = 0; r < n; r++) {
        current += nums[r];
        
        while (current >  sum - x) {
            current -= nums[l];
            l++;
        }
        
        if (current ==  sum - x) {
            ans = Math.max(ans, r - l + 1);
        }
    }

    return ans == -1 ? -1 : n - ans;


}