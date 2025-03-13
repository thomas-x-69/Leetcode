/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    for (const [v1, v2] of operations) {
        nums[map.get(v1)] = v2;
        map.set(v2, map.get(v1))
    }

    return nums;
};