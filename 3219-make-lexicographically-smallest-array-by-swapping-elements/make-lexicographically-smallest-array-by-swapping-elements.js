/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
lexicographicallySmallestArray = (
    nums,
    limit,
    sorted = [...nums].sort((a, b) => a - b),
    prev = ~1e9,
    group = -1,
    groups = [],
    mapping = sorted.reduce((mapping, x, i) => (
        group += prev + limit < x,
        mapping[x] = group,
        groups[group] ??= i,
        prev = x,
        mapping
    ), {}),
    // c = console.log(sorted, groups, mapping)
) => nums.map(x => sorted[groups[mapping[x]]++])