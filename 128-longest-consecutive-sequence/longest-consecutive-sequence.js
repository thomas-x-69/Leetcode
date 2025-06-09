/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums = [...new Set(nums.sort((a, b) => a - b))]
    let max = 1
    let res = 1
    for (i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] == 1) { max++ }
        else { max = 1 }

        res = Math.max(res, max)
    }
    return nums.length>0?res:0
};