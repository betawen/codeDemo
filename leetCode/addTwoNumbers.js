/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = [];
    let state = 0;
    while (l1 || l2 || state){
        let a = l1 == null ? 0 : l1.val;
        let b = l2 == null ? 0 : l2.val;
        res.push((a + b + state) % 10);
        state = Math.floor((a + b + state) / 10);
        l1 = l1 == null ? null : l1.next;
        l2 = l2 == null ? null : l2.next;
    }
    let node = null;
    for (let i = res.length - 1; i >= 0; i --){
        let tmp = {
            val: res[i],
            next: node
        }
        node = tmp;
    }
    return node;
};

let res = addTwoNumbers({val: 2, next: {val: 4, next: null}},{val: 5, next: {val: 6, next: {val: 4, next: null}}})
console.log(res)