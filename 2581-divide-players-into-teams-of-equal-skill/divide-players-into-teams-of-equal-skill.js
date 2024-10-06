/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
      skill.sort((a, b) => a - b);
    let left = 0;
    let right = skill.length - 1;
    let PairSum = 0;

    while (left < right) {
        if(skill[left] + skill[right]!=skill[left+1] + skill[right-1])
        {
            return -1
        }
        PairSum +=  skill[left] * skill[right];
        left++;
        right--;
    }

    return PairSum;
};