/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
    tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    console.log(tasks)
    let curr = 0
    let res = 0
    for(let [lost,min] of tasks)
    {
    if (min > curr) {
            res += (min - curr)
            curr = min;
        }
    curr -= lost;

    }
return res
};