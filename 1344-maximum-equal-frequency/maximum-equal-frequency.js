/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
  const numCnt = {};
  const cntFreq = {};
  let result = 0;
  let maxFreq = 0;
  for (let i = 0; i < nums.length; i++) {
    {
    const num = nums[i];
    cntFreq[numCnt[num]] = cntFreq[numCnt[num]] ? cntFreq[numCnt[num]] - 1 : -1;
    numCnt[num] = numCnt[num] ? numCnt[num] + 1 : 1;
    cntFreq[numCnt[num]] = cntFreq[numCnt[num]] ? cntFreq[numCnt[num]] + 1 : 1;

    if (maxFreq < numCnt[num]) maxFreq = numCnt[num];
   if (maxFreq === 1 || maxFreq * cntFreq[maxFreq] === i || (maxFreq - 1) * (cntFreq[maxFreq - 1] + 1) === i) {
          result = i + 1;
      }
  }
  }
  return result;
};