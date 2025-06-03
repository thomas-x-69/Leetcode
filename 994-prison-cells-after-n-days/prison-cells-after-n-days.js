/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
    n = n % 14 || 14

    while (n--) {
        const prev = [...cells]
        for (let i = 0; i < 8; i++) cells[i] = ~~(prev[i - 1] === prev[i + 1])
    }

    return cells
};