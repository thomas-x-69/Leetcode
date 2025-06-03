/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
    arr = arr.sort((a, b) => a - b)
    let map = {}
    for (e of arr) {
        map[e] ? map[e] += 1 : map[e] = 1
    }
    for (e of arr) {
        if (e == 0) {

            if(map[e] >= 2)
            {map[e]--
            map[e]--
            }
            else continue
        }
      
        
         else if ((map[e] && map[e * 2])) {


            map[e]--
            map[e * 2]--

        } else if (map[e] && map[e / 2]) {
            map[e]--
            map[e / 2]--

        }

    }
    let res = Object.values(map).reduce((a, b) => a + b) 
    if (res > 0) return false
    else return true
};