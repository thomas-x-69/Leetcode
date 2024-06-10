/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    
    let suf = Array.from({length: 26}, () => new Set());

    for (let char of ideas)
    {   
        suf[char.charCodeAt(0)-97].add(char.slice(1))
    } 
    let pairs = 0;

    for (i = 0; i < 25; i++) {
      for (j = i+1; j < 26; j++) {
        let mutual = 0;
        for (let char of suf[i])
          if (suf[j].has(char))
            mutual++

      pairs += (suf[i].size - mutual) * (suf[j].size - mutual)
    }
  }
    return pairs*2
};