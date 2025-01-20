/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
      const n = s1.length;

  let [s1Even, s1Odd] = ["", ""];
  let [s2Even, s2Odd] = ["", ""];

  for (let i = 0; i < n; i++) {
    if (i % 2) {
      s1Odd += s1[i];
      s2Odd += s2[i];
    } else {
      s1Even += s1[i];
      s2Even += s2[i];
    }
  }

  const sortedStr = (str) => str.split("").sort().join("");

  return (
    sortedStr(s1Even) == sortedStr(s2Even) &&
    sortedStr(s1Odd) == sortedStr(s2Odd)
  );
};