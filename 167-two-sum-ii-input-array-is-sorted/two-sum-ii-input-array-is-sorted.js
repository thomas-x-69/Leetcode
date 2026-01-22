/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let map = {}
    for(i=0; i<nums.length; i++)
    {
        let complement = target - nums[i]
   if(nums.includes(complement,i+1))
   {
    return [i+1,nums.indexOf(complement,i+1)+1]
   }
    }
    
    
};