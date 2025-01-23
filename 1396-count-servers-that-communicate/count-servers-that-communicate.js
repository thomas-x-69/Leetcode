/**
 * @param {number[][]} grid
 * @return {number}
 */
const countServers = (grid) => {
    const count1 = arr => arr.toString().split(1).length - 1;
    const r = grid.map(row => count1(row));
    const c = grid[1].map((_, j) => count1(grid.map(v => v[j])));
    return count1(grid.map((l, i) => l.map((v, j) => v && r[i] + c[j] > 2 ? 1 : 0)));
};