/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function (favoriteCompanies) {

    let arr = [];
    let res = [];
    let sets = favoriteCompanies.map(list => new Set(list));

    for (let i = 0; i < favoriteCompanies.length; i++) {
        for (let j = 0; j < favoriteCompanies.length; j++) {
            if (i === j) continue;

            const isSubset = [...sets[i]].every(item => sets[j].has(item));

            if (isSubset) {
                arr.push(i);
                break;
            }
        }
    }

    for (i = 0; i < favoriteCompanies.length; i++) {
        if (!arr.includes(i)) res.push(i)
    }

    return res
};