/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const k = nums.length;
    const minHeap = new MinPriorityQueue({priority: x => x[0]});
    let maxValue = -Infinity;
    
    for (let i = 0; i < k; i++) {
        minHeap.enqueue([nums[i][0], i, 0]);
        maxValue = Math.max(maxValue, nums[i][0]);
    }
    
    let rangeStart = 0, rangeEnd = Infinity;
    
    while (!minHeap.isEmpty()) {
        const [minValue, row, col] = minHeap.dequeue().element;
        
        if (maxValue - minValue < rangeEnd - rangeStart) {
            rangeStart = minValue;
            rangeEnd = maxValue;
        }
        
        if (col + 1 < nums[row].length) {
            minHeap.enqueue([nums[row][col + 1], row, col + 1]);
            maxValue = Math.max(maxValue, nums[row][col + 1]);
        } else {
            break; 
        }
    }
    
    return [rangeStart, rangeEnd];
};