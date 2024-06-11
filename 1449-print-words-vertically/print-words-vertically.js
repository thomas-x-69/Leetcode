/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
       let val = s.split(' ');
    let copy = [...val];
    let res = copy.sort((a, b) => b.length - a.length);
    let resValue = [];
    for (i = 0; i < res[0].length; i++) {
        let res = '';
        for (j = 0; j < val.length; j++) {
            if (!val[j][i]) {
                res += ' ';
            } else {
                res += val[j][i];
            }
        }
        resValue.push(res.trimEnd());
    }
    return resValue;
};