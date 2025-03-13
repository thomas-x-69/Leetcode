/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function (access_times) {
     const map = new Map();

        for (const v of access_times) {
            const [a, b] = v;
            map.set(a, [...(map.get(a) || []), parseInt(b)]);
        }

        const ret = [];

        for (const [x, lst] of map) {
            lst.sort((a, b) => a - b);

            const k = lst.length;

            let flag = false;

            for (let i = 0; i + 3 <= k; ++i)
                flag |= lst[i + 2] < lst[i] + 100;

            if (flag) ret.push(x);
        }

        return ret;
};