/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree == null){return null;}
    if(pRootOfTree.right == null && pRootOfTree.left == null) {return pRootOfTree;}
    let left = Convert(pRootOfTree.left);
    let p =left;
    while(p!=null&&p.right!=null){p = p.right;}
    if(left!=null){
        p.right = pRootOfTree;
        pRootOfTree.left = p;
    }
    let right = Convert(pRootOfTree.right);
    if(right){
        right.left = pRootOfTree;
        pRootOfTree.right = right;
    }
    return left!==null?left:pRootOfTree;
}
let res = Convert({
    val:3,
    left:{
        val:2,
        left: {
            val: 1
        }
    },
    right:{
        val:5,
        left:{
            val:4,
        },
        right:{
            val: 6
        }
    }
})
// console.log(JSON.stringify(res, null,4))
console.log(res)