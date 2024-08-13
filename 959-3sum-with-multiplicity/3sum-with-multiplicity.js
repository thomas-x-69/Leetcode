/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    let count = 0;
    const map = {};
    for (i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            count += map[arr[i]];
        }
        for (j = 0; j < i; j++) {
            const r = target - arr[i] - arr[j];
            map[r] = map[r] + 1 || 1;
        }
    }
    return count % (10**9 + 7);
};