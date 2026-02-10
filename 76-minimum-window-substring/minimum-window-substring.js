/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // the trick is how can we check for the array if filled or not
    if (t.length > s.length) return ""

    let map = {}
    for (let char of t) {
        map[char] ? map[char]++ : map[char] = 1
    }
    let l = 0, r = 0;
    let len = t.length
    let minLen = ""
    while (r < s.length) {

        if (map[s[r]] > 0) len--;
        map[s[r]]--;
        while (len === 0) {

            if (minLen === "" || r - l + 1 < minLen.length) {
                minLen = s.slice(l, r + 1);
            }

            map[s[l]]++;
            if (map[s[l]] > 0) len++;
            l++;
        }

        r++;

    }
    return minLen || ""


};
