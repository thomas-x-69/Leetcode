/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
        let count = 0;
        let len = 1 << 16;
        let pair = new Array(len).fill(0);
        console.log(len)
        for (let num1 of nums) {
            for (let num2 of nums) {
                pair[num1 & num2]++;
            }
        }

        for (let i = 0; i < len; i++) {
            for (let num of nums) {
                if ((num & i) == 0) {
                    count += pair[i];
                }
            }
        }

        return count;
};