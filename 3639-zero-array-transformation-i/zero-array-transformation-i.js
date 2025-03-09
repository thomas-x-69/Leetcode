/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    //make diff array to calculate the starting point and the end point
    // then transfer diff to prefix sum that represents the number of chagnes in each position
    // 
   let n = nums.length;
    let diff = new Array(n + 1).fill(0);

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];

        diff[start] -= 1;
        if (end + 1 < n) {
            diff[end + 1] += 1;
        }
    }
            nums[0] += diff[0];

   for (let i = 1; i < n; i++) {
            diff[i] += diff[i - 1];
        nums[i] += diff[i];
     
    }

    return nums.every(num => num <= 0);
};