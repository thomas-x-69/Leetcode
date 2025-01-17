/**
 * @param {number[]} derived
 * @return {boolean}
 */
const doesValidArrayExist = ([first, ...derived]) =>
     !derived.reduce((acc, v) => acc ^ v, first);