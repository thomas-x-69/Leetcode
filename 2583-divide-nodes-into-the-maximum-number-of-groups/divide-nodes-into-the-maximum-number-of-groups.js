/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function (n, edges) {
  function getComponents(n) {
    let visited = Array(n + 1).fill(false);
    let ans = [];
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        ans.push(visit(i, [], visited));
      }
    }
    return ans;
  }

  function visit(cur, nodes, visited) {
    visited[cur] = true;
    nodes.push(cur);
    for (let next of map.get(cur)) {
      if (visited[next]) continue;
      visit(next, nodes, visited);
    }
    return nodes;
  }

  function find(node, n) {
    let group = Array(n + 1).fill(-1);

    let queue = [];
    queue.push(node);
    let groups = 0;
    while (queue.length > 0) {
      let k = queue.length;
      let set = new Set();
      while (k-- > 0) {
        let cur = queue.shift();

        if (group[cur] != -1) return -1;
        group[cur] = groups;
        for (let next of map.get(cur)) {
          if (group[next] == -1) {
            set.add(next);
          }
        }
      }
      for (let val of set) queue.push(val);
      groups++;
    }
    return groups;
  }

  let map = new Map(); 
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }
  for (let edge of edges) {
    let u = edge[0],
      v = edge[1];
    map.get(u).push(v);
    map.get(v).push(u);
  }

  let components = getComponents(n);

  let ans = 0;
  
  for (let component of components) {
    let groups = -1;
    for (let node of component) {
      groups = Math.max(groups, find(node, n));
    }
    if (groups == -1) return -1;
    ans += groups;
  }

  return ans;
};
