/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    let res = 0
    bannedWords = [...new Set(bannedWords)]
    let i = 0
    let map = {}
    for(word of message)
    {
        map[word]?map[word]++:map[word]=1
    }
    while(res<2&&i<bannedWords.length)
    {
        if(map.hasOwnProperty(bannedWords[i]))res+=map[bannedWords[i]]
        i++
    }

    return res>=2?true:false
};