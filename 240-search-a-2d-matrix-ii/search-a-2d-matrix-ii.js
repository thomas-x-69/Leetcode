/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var row = 0;
    var col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        var curr = matrix[row][col];

        if (curr === target) {
            return true;
        }

        if (curr < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;
};