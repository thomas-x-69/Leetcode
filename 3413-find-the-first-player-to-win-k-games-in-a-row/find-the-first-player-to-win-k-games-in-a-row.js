/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function(skills, k) {
 let n = skills.length;
    let maxSkill = Math.max(...skills);
    let maxSkillIndex = skills.indexOf(maxSkill);
    
    if (k >= n) {
        return maxSkillIndex;
    }

    let currentWinner = 0;
    let consecutiveWins = 0;

    for (let i = 1; i < n; i++) {
        if (skills[currentWinner] > skills[i]) {
            consecutiveWins++;
        } else {
            currentWinner = i;
            consecutiveWins = 1;
        }

        if (consecutiveWins == k) {
            return currentWinner;
        }
    }

    return maxSkillIndex
        
};