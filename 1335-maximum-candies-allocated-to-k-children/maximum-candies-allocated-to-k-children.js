/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let ans = 0;
  let low = 0;
  let high = Math.max(...candies);
  while (low <= high) {
    const mid = Math.trunc((low + high) / 2);
    if (isOk(mid, candies, k)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};

function isOk(target, candies, k) {
  let count = 0;
  for (const candy of candies) {
    count += Math.trunc(candy / target);
  }
  return count >= k;
}