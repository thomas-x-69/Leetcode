/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
   
    let map = new Map(); 
    let count = 0; 

    for(i=0; i<nums1.length; i++) {
        for(l=0; l<nums2.length; l++ ) {
            let sum = nums1[i] + nums2[l];
            map.set(sum, (map.get(sum) || 0)+ 1); 
        }
    }

    for(i=0; i<nums3.length; i++) {
        for (l=0; l<nums4.length; l++) {
            let sum = -(nums3[i] + nums4[l]); 
            
            if (map.get(sum)) {
                count += map.get(sum);
            } 
        }
    }

    return count;
  
};