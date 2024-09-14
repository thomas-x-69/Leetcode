/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let length = 0;
    let maxVal = 0;

    for (i = 0; i < nums.length; i++) {
        maxVal = Math.max(maxVal, nums[i]);
    }

    let count = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === maxVal) {
            count++;
            length = Math.max(length, count);
        } else {
            count = 0;
        }
    }

    return length;
};