/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isTransformable = function(s, t) {
     let indices = Array.from({ length: 10 }, () => [])
        let n = s.length
    for (i = n - 1; i >= 0; i--) {
        indices[s[i]].push(i)
    }
     for (i = 0; i < n; i++) {
        let num = t[i] | 0

        if (!indices[num].length) {
            return false
        }
        let index = indices[num].pop()

        for (let i = 0; i < num; i++) {
            if (indices[i].length && indices[i][indices[i].length-1] < index) return false
        }
    }

    return true
}