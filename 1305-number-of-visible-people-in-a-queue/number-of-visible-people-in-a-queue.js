/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
      let res = Array(heights.length).fill(0);
      let stack = []
   for (i = 0; i < heights.length; i++) {
         let height = heights[i];
         while (stack.length && heights[stack[stack.length - 1]] <= height) {
            res[stack.pop()] += 1;
         }
         if (stack.length) {
            res[stack[stack.length - 1]] += 1;
         }
         stack.push(i);
      }
      return res;
};