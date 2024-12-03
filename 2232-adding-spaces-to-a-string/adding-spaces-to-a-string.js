/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let arr = [];
    for(i=0; i<spaces.length+1; i++) {
        arr.push(s.slice(spaces[i-1], spaces[i]));
    }
    return arr.join(' ');
};