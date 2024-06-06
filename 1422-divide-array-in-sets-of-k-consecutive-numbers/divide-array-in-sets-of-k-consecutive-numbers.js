/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
     if (nums.length % k != 0) {
    return false;
    }
    let countMap = new Map();

  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  nums.sort((a, b) => a - b);

    for (let num of nums) {
    if (countMap.get(num) == 0) {
      continue;
    }

    for (i = 0; i < k; i++) {
    let currNum = num + i;

      if (countMap.get(currNum) == undefined || countMap.get(currNum) == 0) {
        return false;
      }

      countMap.set(currNum, countMap.get(currNum) - 1);
    }}
    return true
};