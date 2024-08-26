/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let stones = [a, b, c].sort((x, y) => x - y);

    let dist1 = stones[1] - stones[0] - 1;
    let dist2 = stones[2] - stones[1] - 1;

    let min, max;
    if (dist1 == 0 && dist2 == 0) {
       min = 0;
       max = 0;
   } else if (dist1 == 0 || dist2 == 0 || dist1 == 1 || dist2 == 1) {
       min = 1;
   } else {
       min = 2;
   }
       max = dist1 + dist2;

   return [min, max];
};