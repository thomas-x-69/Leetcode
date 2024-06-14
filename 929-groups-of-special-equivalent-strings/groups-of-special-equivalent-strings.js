/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    let set = new Set();
    words.forEach(a => set.add(transform(a)));
    return set.size;
};

function transform(s){
    let even = s.split('').filter((_, i) => i % 2 == 0);
    let odd = s.split('').filter((_, i) => i % 2 == 1);
    console.log(even)
    console.log(odd)
    even.sort();
    odd.sort();
    return `${even.join('')}${odd.join('')}`;
};