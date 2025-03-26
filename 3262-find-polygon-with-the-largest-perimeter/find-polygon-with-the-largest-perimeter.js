/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums = nums.sort((a,b)=>a-b)

    let prefix = [nums[0]]
    for(j=1;j<nums.length;j++)
    {
        prefix.push(nums[j]+prefix[j-1])
    }
    console.log(prefix)
    for(i=nums.length-1;i>1;i--)
    {
        if(nums[i]<prefix[i-1])return prefix[i]
    }
    return -1
};