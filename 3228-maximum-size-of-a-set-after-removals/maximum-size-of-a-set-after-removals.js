/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function (nums1, nums2) {
   const n = nums1.length;
    const keep = n / 2; 
    
    const unique1 = new Set(nums1);
    const unique2 = new Set(nums2);
    
    const maxFrom1 = Math.min(keep, unique1.size);
    const maxFrom2 = Math.min(keep, unique2.size);
    
    const total = maxFrom1 + maxFrom2;
    
    const totalUnique = new Set([...unique1, ...unique2]).size;
    
    return Math.min(total, totalUnique);
};