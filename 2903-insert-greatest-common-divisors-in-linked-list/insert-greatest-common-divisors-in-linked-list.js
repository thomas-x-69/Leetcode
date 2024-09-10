/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var getGcd = (a, b) => {

    while(true) {
        if (a === 0)
            return b;

        [a, b] = [b % a, a];
    }
};
var insertGreatestCommonDivisors = function(head) {
      let node = head;

    while(node && node.next) {
        let newNode = new ListNode(getGcd(node.val, node.next.val), node.next);
        node.next = newNode;

        node = newNode.next;
    }

    return head;
    };