/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let max = 0;
    const n = nums.length;
    
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                const curr = (nums[i] - nums[j]) * nums[k];
                if(curr > max) max = curr;
            }
        }
    }
    
    return max;
};