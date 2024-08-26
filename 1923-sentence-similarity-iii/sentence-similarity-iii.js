/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    if (sentence1 == sentence2) return true;
    let x = sentence1.split(' ');
    let y = sentence2.split(' ');
    while (x.at(0) === y.at(0)) x.shift(), y.shift();
    while (x.at(-1) === y.at(-1)) x.pop(), y.pop();
    return !x.length || !y.length;

};