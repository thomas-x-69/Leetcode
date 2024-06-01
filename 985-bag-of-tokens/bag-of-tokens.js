/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b);
    let right= tokens.length-1
    let score= 0
    let max = 0
    for(i=0;i<tokens.length;)
    {
        if(power>=tokens[i])
        {
            power-=tokens[i]
            i++
            score++
            max = Math.max(max,score)
            console.log("face UP")
        }else if(score>0)
        {
            power+=tokens[right]
            score--
            right--

            console.log("face down")

        }else
        {
            break
        }
    }
    return max
    };