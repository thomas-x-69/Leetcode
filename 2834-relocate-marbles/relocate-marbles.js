/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
  let set = new Set(nums)
  for (let i = 0; i < moveFrom.length; i++) {
    let from = moveFrom[i]
    let to = moveTo[i]
    set.delete(from)
    set.add(to)
  }
  return [...set].sort((a, b) => a - b)
}
