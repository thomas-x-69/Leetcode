/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
 for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0 ) {
            if(arr.includes(arr[i] / 2) && arr.indexOf(arr[i] / 2) != i) {
                return true;
            }
        }
    }
    return false;
};