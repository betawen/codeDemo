/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    if(root == null || root == undefined) return;
    let arr = [root];
    for(let i of arr){
        if(null == i){
            continue;
        }
        console.log(i.val);
        arr.push(i.left);
        arr.push(i.right);
    }
}
PrintFromTopToBottom({
    val:1,
    left:{
        val:2,
        left: {
            val: 4
        }
    },
    right:{
        val:3,
        left:{
            val:5,
        },
        right:{
            val: 6
        }
    }
})