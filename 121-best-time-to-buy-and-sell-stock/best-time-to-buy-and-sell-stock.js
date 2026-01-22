/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    for(l=0, r=1;r<prices.length;r++)
    {
        if(prices[l]<prices[r])
        {
            res = Math.max(res, prices[r]-prices[l])
        }
       else
        {
            l=r
        }
   }
    return res
    
};