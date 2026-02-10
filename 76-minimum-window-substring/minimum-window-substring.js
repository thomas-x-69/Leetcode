/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return ""

    let map = {}
    for (let char of t) {
        map[char] ? map[char]++ : map[char] = 1
    }
    let l = 0, r = 0;
    let len = t.length
    let minStart = 0, minLength = Infinity;
    while (r < s.length) {

        if (map[s[r]] > 0) len--;
        map[s[r]]--;
        while (len === 0) {

           if (r - l + 1 < minLength) { 
                minLength = r - l + 1;
                minStart = l;
            }

            map[s[l]]++;
            if (map[s[l]] > 0) len++;
            l++;
        }

        r++;

    }
return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);


};
