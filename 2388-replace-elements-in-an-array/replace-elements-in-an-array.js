/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    console.log(map)


    for (let op of operations) {
        let key = op[0];
        let value = op[1];
        if (map.has(key)) {
            let idx = map.get(key);
            map.set(value, idx);
            map.delete(key);
        }
    }
    for (const [key, idx] of map) {
        nums[idx] = key;
    }

    return nums;


};