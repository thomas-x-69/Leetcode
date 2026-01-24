/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let l = 0;
    let r = height.length - 1;
    let maxArea = 0


    while (l < r) {

        let width = r - l;
        let h = Math.min(height[l], height[r]);
        let area = width * h;
        maxArea = Math.max(maxArea, area)

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }

    }
return maxArea;
};