/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let seenNode = new Set();
    let curr = head;
    while (curr) {
        if (seenNode.has(curr)) {
            return true;
        } seenNode.add(curr);
        
        curr = curr.next;
        
    }
    return false;
};