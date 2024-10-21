/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
      const ans = { val: 0 };
  const set = new Set([]);
  helper(ans, set, s, 0);

  return ans.val;
};

function helper(ans, set, s, idx) {
  if (idx >= s.length) {
    ans.val = Math.max(ans.val, set.size);
    return;
  }

  for (let i = idx; i < s.length; i++) {
    const substring = s.slice(idx, i + 1);
    if (set.has(substring)) continue;
    set.add(substring);
    helper(ans, set, s, i + 1);
    set.delete(substring);
  }
};