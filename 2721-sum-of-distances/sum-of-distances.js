/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const map = new Map();
    const result = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const val = map.get(num) || {
            count: 0,
            sum: 0
        };
        result[i] += (val.count * i) - val.sum;
        val.sum += i;
        val.count++;
        map.set(num, val);
    }
    map.clear();

    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        const val = map.get(num) || {
            count: 0,
            sum: 0
        };
        result[i] += val.sum - (val.count * i);
        val.sum += i;
        val.count++;
        map.set(num, val);
    }

    return result;

};