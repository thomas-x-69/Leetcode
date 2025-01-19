/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
    const combined = new Set([...fronts, ...backs])

    for (let i in fronts) {
        if (fronts[i] === backs[i] && combined.has(fronts[i])) {
            combined.delete(fronts[i])
        }
    }

    return combined.size == 0 ? 0 : Math.min(...combined)
}