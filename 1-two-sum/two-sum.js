/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        const complement = target - nums[i];
        if (complement in map) {
            return [map[complement], i];
        } map[nums[i]] = i;
    } return [];
};