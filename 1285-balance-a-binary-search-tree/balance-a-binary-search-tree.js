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
var balanceBST = function (root) {
    const toArray = (n) => {
        if (!n) return [];
        return [...toArray(n.left), n.val, ...toArray(n.right)];
    }

    const toBST = (arr) => {
        if (arr.length === 0) return null;
        if (arr.length === 1) return new TreeNode(arr[0]);
        let mid = ~~(arr.length / 2);
        let left = toBST(arr.slice(0, mid));
        let right = toBST(arr.slice(mid + 1));
        return new TreeNode(arr[mid], left, right);
    }

    let values = toArray(root);
    return toBST(values);
};