/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    nums.sort((a, b) => a - b);
    let res = 0;
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        let diff = nums[right] - nums[left];
        while (diff > 2 * k) {
            left++;
            diff = nums[right] - nums[left];
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
};