/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {

    let counter = {}, res = 0;
    for (let t of tasks) {
        counter[t] = (counter[t] || 0) + 1;
    }
    for (let k in counter) {
        if (counter[k] === 1) return -1;
        res += Math.ceil(counter[k] / 3);
    }
    return res;

};