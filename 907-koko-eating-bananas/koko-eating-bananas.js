/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1
    let right = Math.max(...piles)
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        let count = 0
        for (i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / mid)
        }
        if (count > h) {
            left = mid + 1
        } else {
            right = mid
        }

    }
    return left

};