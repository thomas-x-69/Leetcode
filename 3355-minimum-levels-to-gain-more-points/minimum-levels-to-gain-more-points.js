/**
 * @param {number[]} possible
 * @return {number}
 */
var minimumLevels = function(possible) {
    // map all 0 to 1
    // change the array with prefix and posfix
    // loop and if number is bigger than or equal 0 then return it's index + 1
  let arr = new Array(possible.length).fill(0)
possible = possible.map((a)=>a==0?-1:a)
let prefix = 0
let postfix = 0

// First loop - calculate prefix sums only
for(let i=0; i<possible.length; i++) {
    prefix += possible[i]
    arr[i] = prefix
}

// Reset and calculate postfix separately
postfix = 0
for(let j=possible.length-1; j>=0; j--) {
    postfix += possible[j]
    // Apply the postfix effect to each position
    arr[j] -= postfix // Always subtract (this is what was missing)
    arr[j] += possible[j] // Add back the current element to avoid double counting
}

console.log(arr)
for(let k=0; k<arr.length-1; k++) {
    if(arr[k]>0) return k+1
}
return -1
};