/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        let left = 0
        let right = arr.length - 1
        let mid = Math.floor(arr.length / 2)-1
        while (left <= right) {
            if (arr[mid] > target) {
                right = mid-1
            } else if (arr[mid] < target) {
                 left = mid+1
            } else if (arr[mid] == target)  {
                return true
            }
            mid = Math.floor((right+left) / 2)
            
        }
    }
    return false
};
