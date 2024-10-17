/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    num = num.toString().split('')
    let rs = []
    let max = 0
    let mp = new Map()
    for (let i = num.length - 1; i > -1; i--) {
        if (num[i] > max) {
            max = num[i]
            mp.set(max, i)
        }
        rs[i] = max
    }
    for (let i = 0; i < num.length; i++) {
        if (rs[i] > num[i]) {
            let temp = num[i]
            num[i] = rs[i]
            num[mp.get(rs[i])] = temp
            break

        }
    }
    return num.join('') * 1
};