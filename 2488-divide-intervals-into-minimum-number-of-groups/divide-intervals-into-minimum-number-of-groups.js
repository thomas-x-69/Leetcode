/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
  let n = intervals.length;
  let a = new Uint32Array(n << 1);
  for (let i = 0; i < n; ++i) {
    a[i << 1] = intervals[i][0] << 1;
    a[(i << 1) | 1] = (intervals[i][1] << 1) | 1;
  }
  let res = 1;
  let cur = 0;
  n <<= 1;
  a.sort((a,b) => a - b);
  for (let i = 0; i < n; ++i) if (a[i] & 1) --cur
  else {
    ++cur;
    res = Math.max(res, cur);
  }

  return res;
};