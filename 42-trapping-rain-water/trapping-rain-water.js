/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let water = 0;
    let maxLeft = 0;
    let maxRight= 0;

    while(left<right)
    {
        if(height[right]>=height[left])
        {
         maxLeft = Math.max(height[left],maxLeft)
        water += maxLeft - height[left]
        left++;

        }else 
        {
         maxRight = Math.max(height[right],maxRight)
        water += maxRight - height[right] 
            right--;
        }

    }
    return water;
};