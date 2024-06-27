/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = (edges) => edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1] ? edges[1][0] : edges[1][1];
