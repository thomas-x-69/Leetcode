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
var reverseOddLevels = function (root) {


    function dfs(nodeLeft, nodeRight, level = 0) {

        if (!nodeLeft || !nodeRight) return


        if (level % 2 !== 0) {

            let tmp = nodeLeft.val
            nodeLeft.val = nodeRight.val
            nodeRight.val = tmp
        }

        dfs(nodeLeft.left, nodeRight.right, level + 1)
        dfs(nodeLeft.right, nodeRight.left, level + 1)
    }

    if (root)

        dfs(root.left, root.right, 1)

    return root

};