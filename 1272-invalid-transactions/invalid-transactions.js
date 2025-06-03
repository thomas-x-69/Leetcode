/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
   
let arr = transactions.map((a) => a.split(","))
let res = []
let added = new Set() 

for (let i = 0; i < arr.length; i++) {
    if (arr[i][2] > 1000 && !added.has(i)) {
        res.push(transactions[i])
        added.add(i)
    }
    
    for (let j = 0; j < arr.length; j++) {
        if (i !== j) { 
            if (Math.abs(arr[i][1] - arr[j][1]) <= 60 && 
                arr[i][0] === arr[j][0] && 
                arr[i][3] !== arr[j][3]) {
                
                if (!added.has(i)) {
                    res.push(transactions[i])
                    added.add(i)
                }
                if (!added.has(j)) {
                    res.push(transactions[j])
                    added.add(j)
                }
            }
        }
    }
}

return res
};