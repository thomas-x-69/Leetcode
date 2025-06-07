/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
const answerString = (word, numFriends, len = word.length - numFriends + 1) => 
    numFriends > 1 ? [...word].map((_, i) => word.substr(i, len)).sort().at(-1) : word;
    