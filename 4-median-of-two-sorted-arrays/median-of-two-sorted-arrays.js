/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    NewArr = nums1.concat(nums2)
    if (NewArr.length == 0) {
    return; 
  }
  NewArr.sort((a, b) => a - b); 
  const midpoint = Math.floor(NewArr.length / 2); 
  const median = NewArr.length % 2 === 1 ?
    NewArr[midpoint] : 
    (NewArr[midpoint - 1] + NewArr[midpoint]) / 2; 
   return median
};