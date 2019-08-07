// /*function ListNode(x){
//     this.val = x;
//     this.next = null;
// }*/
// function Merge(pHead1, pHead2)
// {
//     // write code here
//     let arr = [];
//     let node  = pHead1;
//     let node2 = pHead2;
//     while(pHead2 !== null){
//         while(node.val <= pHead2.val){
//             arr.push(node.val);
//             node = node.next;
//         }
//         let tmp = pHead2.next;
//         pHead2.next = node;
//         node = pHead2;
//         pHead2 = tmp;
//     }
//     while(node !== null){
//         arr.push(node.val);
//         node = node.next;
//     }
//     arr.reverse();
//     let res = null;
//     for(let i of arr){
//         let tmp = {
//             val: i,
//             next: res
//         }
//         res = tmp;
//     }
//     return res;
// }
let res = Merge({val:1,next:{val:3,next:null}}, {val:0,next:{val:2,next:null}});
console.log(JSON.stringify(res,null, 4));

function Merge(pHead1, pHead2) {
    let head = pHead1;
    if(pHead2 === null || pHead2 === null){
        return (pHead1 === null) ? pHead2 : pHead1;
    }
    if(pHead1.val <= pHead2.val){
        head = pHead1;
        head.next = Merge(pHead1.next, pHead2);
    }else {
        head = pHead2;
        head.next = Merge(pHead1, pHead2.next);
    }
    return head;
}
