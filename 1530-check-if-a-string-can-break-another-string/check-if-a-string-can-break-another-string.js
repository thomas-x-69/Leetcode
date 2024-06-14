/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
        let perm1 = s1.split('').sort();
    let perm2 = s2.split('').sort();
    function isBreaking(s1, s2) {
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] >= s2[i]) continue;
            return false;
        }
        return true;
    }
    return isBreaking(perm1, perm2) || isBreaking(perm2, perm1);
};