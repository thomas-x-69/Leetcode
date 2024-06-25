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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    
    let accumulation = 0;
    
    var helper = function( node ){
        
        if( node != null ){
            
            helper( node.right );
            
            accumulation += node.val;
            node.val = accumulation;
            
            helper( node.left );
        }
        return node;
    }
    // ---------------------------------
    
    return helper(root);
};