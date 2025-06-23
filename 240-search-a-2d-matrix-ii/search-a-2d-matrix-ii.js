/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let left = 0
    let right = matrix[0].length - 1

    while (left < matrix.length && left >= 0) {
       if (matrix[left][right] === target) return true;
        else if (matrix[left][right] > target) right--;
        else left++;
    }

    return false
};