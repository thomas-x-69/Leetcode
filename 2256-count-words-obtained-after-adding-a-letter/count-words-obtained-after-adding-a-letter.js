/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
    const startMap = {};
    for (let word of startWords) {
        startMap[word.split('').sort().join('')] = true;
    }
        let ans = 0;

    for (let word of targetWords) {
        for (let i = 0; i < word.length; i++) {
            let temp = (word.substring(0, i) + word.substring(i + 1, word.length)).split('').sort().join('');
            console.log(word)
            if (startMap[temp]) {
                ans++;
                break;
            }
        }
    }

    return ans;
};