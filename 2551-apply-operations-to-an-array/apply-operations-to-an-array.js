/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    const n = nums.length;
    
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    
    let nonZeroIdx = 0;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIdx++] = nums[i];
        }
    }
    
    while (nonZeroIdx < n) {
        nums[nonZeroIdx++] = 0;
    }
    
    return nums;
};