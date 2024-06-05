/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    let counter = 0
    let min = nums[nums.length-1]
    for(i=nums.length-2;i>=0;i--)
    {      
        let dif = Math.ceil(nums[i]/min)
        counter+=dif-1
        min = Math.floor(nums[i] / dif);
    }
    return counter
};