/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let start = 0;
    let sum = 0;
    let count = 0;
    
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        
        while (sum * (end - start + 1) >= k) {
            sum -= nums[start];
            start++;
        }
        
        count += (end - start + 1);
    }
    
    return count;
};