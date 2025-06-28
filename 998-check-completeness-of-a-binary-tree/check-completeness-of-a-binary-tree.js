/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
  
    function dfs(node) {
        if(!node) return [0];
        return [...dfs(node.left), ...dfs(node.right)].map(x => x + 1);
    }
    
    const heights = dfs(root);
    const maxH = heights[0];
    
    for(let i = 1; i < heights.length; i++) {
        if(heights[i] > heights[i-1]) return false;
        if(heights[i] < maxH-1) return false;
    }
    return true;
};