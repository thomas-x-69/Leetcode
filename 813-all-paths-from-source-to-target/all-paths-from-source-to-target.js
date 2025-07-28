/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const res = [];
    
    function dfs(node, path) {
        if (node === graph.length - 1) {
            res.push([...path]); 
            return;
        }
        
        for (let neighbor of graph[node]) {
            path.push(neighbor);        
            dfs(neighbor, path);       
            path.pop();    
        }
    }
    
    dfs(0, [0]); 
    return res;
};