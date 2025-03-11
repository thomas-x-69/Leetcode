/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
     items.sort((a, b) => a[0] - b[0]);
    let queriesWithIndex = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
    
    let res = new Array(queries.length).fill(0);
    let maxBea = 0;
    let j = 0;

      for (let [query, index] of queriesWithIndex) {
        while (j < items.length && items[j][0] <= query) {
            maxBea = Math.max(maxBea, items[j][1]);
            j++;
        }
        res[index] = maxBea;
    }
    return res;
};