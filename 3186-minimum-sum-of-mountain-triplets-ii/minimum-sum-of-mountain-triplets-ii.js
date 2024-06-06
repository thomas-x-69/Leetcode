/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
      const n = nums.length
    let ans = Infinity

    let minI = Array(n).fill(nums[0])
    let minK = Array(n).fill(nums[nums.length - 1])

    for ( a = 1; a < n; a++){
        minI[a] = Math.min(nums[a], minI[a-1])
    }
     for (a = n - 2; a >= 0; a--){
        minK[a] = Math.min(nums[a], minK[a+1])
    }
      for ( j = 1; j < n - 1; j++){
        if (minI[j-1] < nums[j] && nums[j] > minK[j+1]){
            ans = Math.min(ans, minI[j-1] + nums[j] + minK[j+1])
        }
    }

    return ans == Infinity ? -1 : ans
};