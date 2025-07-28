/**
 * @param {number[]} row
 * @return {number}
 */

var minSwapsCouples = function(row) {
  const adjList = {};
  const idx = {};
  let swaps = 0;

  for (let i = 0; i < row.length; i += 2) {
    adjList[i] = i + 1;
    adjList[i + 1] = i;

    idx[row[i]] = i;
    idx[row[i + 1]] = i + 1; 
  }

  for (let i = 0; i < row.length; i += 2) {
    let curr = row[i];
    let next = row[i + 1];
    let partner = adjList[curr];

    if (next !== partner) {
      let next_idx = idx[next];
      let partner_idx = idx[partner];
      [row[next_idx], row[partner_idx]] = [row[partner_idx], row[next_idx]];

      idx[next] = partner_idx;
      idx[partner] = next_idx;

      swaps += 1;
    }
  }

  return swaps;
};