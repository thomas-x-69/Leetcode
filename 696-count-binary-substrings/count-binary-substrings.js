/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {

    let count = 0, prev = 0, curr = 1;

    for (let i = 1; i < s.length; i++) {

        if (s[i] != s[i - 1]) {

            count += Math.min(prev, curr);

            prev = curr;

            curr = 1;
        } else {
            curr++;
        }
    }

    return count + Math.min(prev, curr);
};