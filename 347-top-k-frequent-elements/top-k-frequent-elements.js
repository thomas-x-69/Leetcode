/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // freq
    // sort
    // to array + slice "k" elements
    // 
    let freq = {}
    for(i=0;i<nums.length;i++)
    {
    freq[nums[i]]?freq[nums[i]]++:freq[nums[i]]=1
    }
    
    return Object.entries(freq).sort((a,b)=>b[1]-a[1]).map((a)=>Number(a[0])).slice(0,k)
    
};