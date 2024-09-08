/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let n = 0
    let p = head
    while (p) {
        n += 1
        p = p.next
    }
    let m = Math.ceil((n+.0) / k) - 1
    let r = n % k - 1
    let arr = []
    for (let j = 0; j < k; j++) {
        arr.push(head)
        for (let i = 0; i < m; i++)
            head = head.next
        if (head) {
            p = head.next
            head.next = null, 
            head = p
            if (j == r)
                m -= 1
        }
    }
    return arr
};