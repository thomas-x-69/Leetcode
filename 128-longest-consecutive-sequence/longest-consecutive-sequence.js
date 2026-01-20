/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0
    nums = [...new Set(nums.sort((a, b) => a - b))];
    let temp = 0
    let res = 0
    console.log(nums)
    for (i = 1; i < nums.length; i++) {
        if (nums[i] - 1 == nums[i - 1]) {
            temp++
        } else {

            res = Math.max(res, temp)
            temp = 0
        }
    }
     res = Math.max(res, temp)

    return res + 1
};