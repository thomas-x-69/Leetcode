/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
    const map = new Map();
    let count = 0;
    let n = 0;

    map.set(0, 1);
    for (let num of nums) {
        n = n ^ num;
        if (map.has(n)) count += map.get(n);
        map.set(n, (map.get(n) || 0) + 1);
    }
    return count;
};