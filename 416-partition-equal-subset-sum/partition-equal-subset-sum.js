/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let totalSum = nums.reduce((acc, item) => acc + item, 0)
    if (totalSum % 2) return false
    dp = new Set()
    dp.add(0)
    let target = totalSum / 2  

    for(i=0;i<nums.length;i++)
    {
        let nextDP = new Set()
        for(let t of dp)
        {
            nextDP.add(t + nums[i])
            nextDP.add(t)
        }
        dp = nextDP
    }
    return dp.has(target)
};