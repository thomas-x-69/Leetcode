/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let len = nums.length;
    let minIndex = nums.indexOf(Math.min(...nums));
    let maxIndex = nums.indexOf(Math.max(...nums));
    if (minIndex > maxIndex) [minIndex, maxIndex] = [maxIndex, minIndex];
    let bothremove = (len - maxIndex) + (minIndex + 1);
    let rightremove = (len - minIndex);
    let leftremove = (maxIndex + 1);
    return Math.min(bothremove, rightremove, leftremove);
}