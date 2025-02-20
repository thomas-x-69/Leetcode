/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let str = []
    for(i=0;i<nums.length;i++)
    {
     str.push(Math.round(Math.random()))
    }
    while(nums.includes(str.join("")))
    {
     str = []

    for(i=0;i<nums.length;i++)
    {
     str.push(Math.round(Math.random()))
    }
    }
return str.join("") 
};