/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  const points = events.flatMap(([s, e, v]) => [[s, 1, v], [e, -1, v]]);
  
  points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let maxDone = 0, maxTotal = 0;
  for (const [_, type, val] of points) {
    if (type === 1) maxTotal = Math.max(maxTotal, val + maxDone);
    else maxDone = Math.max(maxDone, val);
  }

  return maxTotal
};