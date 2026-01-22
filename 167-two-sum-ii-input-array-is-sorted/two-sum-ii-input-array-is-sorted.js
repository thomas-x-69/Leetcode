/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //!----- solution 1: not optimal -------!

    // for (i = 0; i < nums.length; i++) {
    //     let complement = target - nums[i]
    //     if (nums.includes(complement, i + 1)) {
    //         return [i + 1, nums.indexOf(complement, i + 1) + 1]
    //     }
    // }

    //!----- solution 2: optimal -------!

    let l = 0, r = nums.length-1;
    while (l<r) {
        if(nums[l]+nums[r]==target)
        {
            return [l+1,r+1]
        }else if(nums[l]+nums[r]>target)
        {
            r--
        }else if (nums[l]+nums[r]<target)
        {
            l++
        }
    }

};