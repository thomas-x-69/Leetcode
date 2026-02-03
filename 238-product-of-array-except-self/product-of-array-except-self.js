/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix = [nums[0]]
    let suffix = [nums[nums.length - 1]]
    let res = []
    for (let i = 1, j = nums.length - 2; i < nums.length; i++, j--) {
        prefix.push(prefix[i - 1] * nums[i])
        suffix.push(nums[j] * suffix[i - 1])

    }
    suffix.reverse()
    for(i=0;i<nums.length;i++)
    {
        let num = 1
        if(i>0)
        {
            num*=prefix[i-1]
        }
        if(i<nums.length-1)
        {
            num*=suffix[i+1]

        }
        res.push(num)
    }
    return res
};