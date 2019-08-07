/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(root === null) return root;
    if(root.left === null && root.right === null) return root;
    let left = root.left;
    let right = root.right;
    root.left = Mirror(right);
    root.right = Mirror(left);
    return root;
}