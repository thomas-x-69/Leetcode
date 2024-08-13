/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {

    let nums = n.toString().split("")
    let ind = -1;
    let len = nums.length - 1;

    for (i = len - 1; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            ind = i;
            break;
        }
    }

    for (let i = len; i >= ind; i--) {
        if (nums[i] > nums[ind]) {
            [nums[ind], nums[i]] = [nums[i], nums[ind]];
            break;
        }

    }
    let arr = nums.splice(ind + 1, len).reverse()
        nums.push(...arr);
        nums = Number(nums.join(""))
        if(nums<=n)return -1
    return nums>2147483647 ? -1 : nums;

};