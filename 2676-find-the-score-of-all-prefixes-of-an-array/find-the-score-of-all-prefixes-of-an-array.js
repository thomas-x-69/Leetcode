/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findPrefixScore = function(nums) {
    // 1- in the loop we assign max
    // 2- we add to prefix (nums[i] + max) 
    // 3- we push prefix to score
    let max = 0
    let score = []
    let prefix = 0
    for(i=0;i<nums.length;i++)
    {
    max = Math.max(max, nums[i])
    prefix += (nums[i] + max)
    score.push(prefix)
    }
    return score
};