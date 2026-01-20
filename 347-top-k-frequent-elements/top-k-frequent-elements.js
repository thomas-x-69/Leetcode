/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {};
    for (i = 0; i < nums.length; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }
    const sortableArray = Object.entries(map);
    sortableArray.sort((a, b) => b[1] - a[1])
    let res = []
    for(i=0; i<k ; i++)
    {
        res.push(Number(sortableArray[i][0]))
    }
    return res


};