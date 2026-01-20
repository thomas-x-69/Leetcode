/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const hash = new Map();

    for (let num of nums) {
        hash.set(num, (hash.get(num) || 0) + 1)
    }

    let sorted = new Map([...hash.entries()].sort(([, a], [, b]) => a - b))

    return Array.from(sorted.keys()).slice(-k)

};