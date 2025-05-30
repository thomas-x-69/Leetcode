/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function(coordinates, k) {
      let map = new Map()
  let res = 0
  for (let [x, y] of coordinates) {
    for (let j = 0; j <= k; j++) {
      let x_compliment = x ^ j
      let y_complement = y ^ (k - j)
      res += map.get(`${x_compliment} ${y_complement}`) || 0
    }
    map.set(`${x} ${y}`, (map.get(`${x} ${y}`) || 0) + 1)
  }
  return res 
};