/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
     nums1.push(...nums2)
    nums1.sort((a,b)=>a-b)
    console.log(nums1)
    if(nums1.length%2==0)
    {
    return (nums1[nums1.length/2]+nums1[(nums1.length/2)-1])/2 
    }
    return nums1[Math.floor(nums1.length/2)]
};