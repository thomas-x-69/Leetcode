/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
  let res = new Array(heights.length);
  let stack = [];
  for (i=heights.length-1; i>=0; i--) {

    let c= 0;

    while (stack.length&&stack[stack.length-1]<heights[i]) {
      c++;
      stack.pop();
    }

    if (stack.length) c++;
    stack.push(heights[i]);
    res[i]= c;
  }
  return res;
};