/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(hand, groupSize) {
     if (hand.length % groupSize != 0) {
    return false;
    }
    let countMap = new Map();

  for (let card of hand) {
    countMap.set(card, (countMap.get(card) || 0) + 1);
  }

  hand.sort((a, b) => a - b);

    for (let card of hand) {
    if (countMap.get(card) == 0) {
      continue;
    }

    for (i = 0; i < groupSize; i++) {
    let currCard = card + i;

      if (countMap.get(currCard) == undefined || countMap.get(currCard) == 0) {
        return false;
      }

      countMap.set(currCard, countMap.get(currCard) - 1);
    }}
    return true
};