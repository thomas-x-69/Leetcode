/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
    const map = {};
    
    let sum = 0, maxSum = 0, unique = 0, i = 0, j = 0;
    
    while(i < nums.length) {
        
        const num = nums[i];
        map[num] = map[num] || 0;
        
        if(map[num] == 0) unique++;
        
        map[num]++;
        sum += num;
        
        if(i - j == k - 1) {
            
            if(unique >= m) maxSum = Math.max(maxSum, sum);
            
            map[nums[j]]--;
            
            if(map[nums[j]] == 0) unique--;
            
            sum -= nums[j];
            j++;
        }
        i++;
    }
    return maxSum;
};