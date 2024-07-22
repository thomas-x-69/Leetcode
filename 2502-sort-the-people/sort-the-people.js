/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
        return names.map((e, i) => e + heights[i]).sort((a, b) => b.match(/\d+/) - a.match(/\d+/)).join(' ').replace(/[0-9]/g, '').split(" ")

};