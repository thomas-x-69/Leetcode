/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
    let res = 0
    let map = new Map();
    map.set(0, 1);
    let xor = 0;
    for (let no of nums) {
        xor = xor ^ no;
        if (map.has(xor)) {
            res = res + map.get(xor);
            map.set(xor, map.get(xor) + 1)
        } else {
            map.set(xor, 1)
        }
    }
    return res;
};