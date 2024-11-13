/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a,b) => a - b)
    const N = nums.length

    function lowerbound(target, arr, left, right) {
        while(left < right) {
            const mid = Math.floor(left + (right- left)/2)

            if(arr[mid] >= target) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        if(left === arr.length) {
            return -1
        }

        return left
    }    

    function upperbound(target, arr, left, right) {
        while(left < right) {
            const mid = Math.floor(left + (right- left)/2)

            if(arr[mid] > target) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        if(left === 0) {
            return -1
        }

        return left-1
    }

    let res = 0

    for(let i = 0; i < nums.length-1; i++) {
        const curr = nums[i]
        const lowerNeededValue = lower - curr
        const upperNeededValue = upper - curr

        const lowerNeededValueIdx = lowerbound(lowerNeededValue,nums, i+1,N)
        const upperNeededValueIdx = upperbound(upperNeededValue,nums, i+1,N)
        if(lowerNeededValueIdx === -1) continue
        if(upperNeededValueIdx === -1) continue

        res += Math.max(upperNeededValueIdx - lowerNeededValueIdx+1, 0)
    }

    return res
};