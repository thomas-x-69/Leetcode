/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isRationalEqual = function(s, t) {
    function calculate(v) {
        let start = v.split('(')[0] || v
        let newer = v.split('(')[1] && v.split('(')[1].split(')')[0] || '0';

        start = start.includes('.') ? start : start + '.'
        newer = newer.padEnd(20, newer)

        return parseFloat(start + newer)
        }
    return calculate(s) == calculate(t);
};