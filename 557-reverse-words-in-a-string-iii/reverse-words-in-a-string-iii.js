/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = (s)=> s.split(" ").map((a)=>a.split("").reverse().join("")).join(" ")