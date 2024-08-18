/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const uglySequence = [1];
    let index2 = 0, index3 = 0, index5 = 0;
    let next2 = 2, next3 = 3, next5 = 5;
    
    for (let i = 1; i < n; i++) {
        const nextUgly = Math.min(next2, next3, next5);
        uglySequence.push(nextUgly);
        
        if (nextUgly === next2) {
            index2++;
            next2 = uglySequence[index2] * 2;
        }
        if (nextUgly === next3) {
            index3++;
            next3 = uglySequence[index3] * 3;
        }
        if (nextUgly === next5) {
            index5++;
            next5 = uglySequence[index5] * 5;
        }
    }
    
    return uglySequence[n - 1];
};