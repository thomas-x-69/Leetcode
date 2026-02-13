/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    let map = new Map()
    for (let word of strs) {
        let sorted = word.split("").sort().join("")
        if(!map.has(sorted))
        {
            map.set(sorted, [word])}else
            map.get(sorted).push(word)
      
    }
    return([...map.values()])

};