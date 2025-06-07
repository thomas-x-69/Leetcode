/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(i=0;i<numbers.length-1;i++)
    {
     let num = numbers.indexOf(target-numbers[i],i+1)
        if(num!=-1)return [i+1,num+1]
    
    }
};