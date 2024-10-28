/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSquareStreak = function(nums) {
    nums.sort((a, b) => a-b)
    const set = new Set(nums)
    let max = -1
    let visited = new Set()
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (visited.has(num)) continue;
        let count = 0
        visited.add(num)
        while (set.has(num*num)) {
            visited.add(num*num)
            num = num*num
            count++
        }
        if (count > 0) {
            max = Math.max(max, count+1)
        }
    }
    return max
};