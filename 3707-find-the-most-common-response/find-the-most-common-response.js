/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function (responses) {
    let map = {}
    responses = responses.map((a) => [...new Set(a)]).flat()
    for (response of responses) {

        map[response] ? map[response]++ : map[response] = 1

    }
    const maxRes = Object.entries(map).reduce((max, curr) => {
        const [maxRes, maxVal] = max;
        const [currKey, currVal] = curr;

        if (currVal > maxVal) return curr;
        if (currVal === maxVal) {
            return currKey < maxRes ? curr : max;
        }
        return max;
    })[0];
    return maxRes

};