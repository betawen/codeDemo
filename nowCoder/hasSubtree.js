/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 题目要求子树B若为null则必须为null，但左右均为null时相等，要规避这种情况最好另外写一个function
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(null === pRoot1 || null === pRoot2){
        return false;
    }
    return isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}

// 判断是否为子树
function isSubtree(root1, root2) {
    if(root2 === null) return true;
    if(root1 === null) return false;
    return (root1.val === root2.val) && isSubtree(root1.left, root2.left) && isSubtree(root1.right, root2.right)

}