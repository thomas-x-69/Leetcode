/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    basket1.sort((a, b) => a - b);
    basket2.sort((a, b) => a - b);

    let n = basket1.length;
    let p1 = 0;
    let p2 = 0;
    let swaps = [];
    while (p1 < n || p2 < n) {
        if (p2 == n || basket1[p1] < basket2[p2]) {
            if (basket1[p1] == basket1[p1 + 1]) {
                swaps.push(basket1[p1]);
                p1 += 2;
            } else {
                return -1;
            }
        } else if (p1 == n || basket2[p2] < basket1[p1]) {
            if (basket2[p2] == basket2[p2 + 1]) {
                swaps.push(basket2[p2]);
                p2 += 2;
            } else {
                return -1;
            }
        } else {
            p1++;
            p2++;
        }
    }
    let minCost = Math.min(basket1[0], basket2[0]) * 2;
    console.log(swaps)
    return swaps.sort((a, b) => a - b).slice(0, swaps.length / 2).reduce((acc, cost) => acc + Math.min(cost, minCost), 0);

   

};