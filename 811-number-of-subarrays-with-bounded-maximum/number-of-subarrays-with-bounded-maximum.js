/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(a, low, high) {
    function countSubarrays(high) {
    let total = 0;
    let count = 0;
    for (let e of a) {
      if (e <= high) {
        count += 1;
        total += count;
      } else {
        count = 0;
      }
    }
    return total;
  }
  return countSubarrays(high) - countSubarrays(low - 1);
};