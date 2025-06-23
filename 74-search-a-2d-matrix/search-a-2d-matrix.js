/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    matrix = matrix.flat()

    let left = 0
    let right = matrix.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[mid] === target) {
            return true;
        }
        else if (matrix[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return false

};