/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
      let size=1, max=nums[0], possibleMax=nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]<max){
            max=possibleMax;
            size = i+1;
        }
        else{
            possibleMax = Math.max(possibleMax, nums[i])
        }
    }
    return size;
};