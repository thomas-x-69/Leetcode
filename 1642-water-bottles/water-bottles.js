/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let numEmpty = 0, res = 0;
    
    while (numBottles > 0) {
        res += numBottles;
        numEmpty += numBottles;
        numBottles = Math.floor(numEmpty / numExchange);
        numEmpty = numEmpty % numExchange;
    }
    
    return res;
};