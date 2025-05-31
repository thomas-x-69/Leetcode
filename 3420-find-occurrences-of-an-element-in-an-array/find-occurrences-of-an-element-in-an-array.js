/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
    let arr = []
    let res = []

    for (i = 0; i < nums.length; i++) {
        if(nums[i]==x)arr.push(i)
    }
   for (let i = 0; i < queries.length; i++) {
        let k = queries[i];
        if (k <= arr.length) {
            res.push(arr[k - 1]); 
        } else {
            res.push(-1);
        }
    }
    return res
};
