/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0
    nums = [...new Set(nums.sort((a, b) => a - b))];
    console.log(nums)
    let temp = 0
    let res = 0
    for (i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1) {
            temp = 0
        }
         if (nums[i] - nums[i - 1] == 1) {
        temp++
        }
        temp > res ? res = temp : null

    }
    return res + 1
};