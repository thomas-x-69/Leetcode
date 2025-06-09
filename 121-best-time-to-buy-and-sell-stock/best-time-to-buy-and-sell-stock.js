/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max_profit = 0;
    for (let right = 1,left = 0; right < prices.length; right++) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];

            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
    }
    return max_profit;
};