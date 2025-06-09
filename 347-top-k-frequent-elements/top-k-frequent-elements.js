/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
    for (num of nums) {
        map[num] ? map[num]++ : map[num] = 1

    }

    console.log(map)
    const res = Object.entries(map).sort((a, b) => b[1] - a[1]).map((a) => Number(a[0]));
    res.length = k
    return res
};