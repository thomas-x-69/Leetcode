/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = [];
    let arr = [];

    for (let i = 0; i < nums.length; i++) {

        if (i >= k && nums[i - k] === arr[0]) {
            arr.shift();
        }

        while (arr.length && arr[arr.length - 1] < nums[i]) {
            arr.pop();
        }
        arr.push(nums[i]);

        if (i >= k - 1) {
            res.push(arr[0]);
        }
    }

    return res;    

};