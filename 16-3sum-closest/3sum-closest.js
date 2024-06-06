/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = Infinity;
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) { 
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == target) { 
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) { 
                res = sum;
            }
        }
    }
    return res;
};