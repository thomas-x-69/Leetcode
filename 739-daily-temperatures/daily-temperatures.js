/**
 * @param {number[]} temps
 * @return {number[]}
 */
var dailyTemperatures = function (temps) {
    const n = temps.length;
    const result = new Array(n).fill(0);
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && temps[i] >= temps[stack.at(-1)]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = stack.at(-1) - i;
        }
        stack.push(i);
    }
    return result;
};