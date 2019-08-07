function deepTraversal(node,nodeList) {
    if (node) {
        nodeList.push(node);
        var children = node.children;
        for (var i = 0; i < children.length; i++)
            //每次递归的时候将  需要遍历的节点  和 节点所存储的数组传下去
            deepTraversal(children[i],nodeList);
    }
    return nodeList;
}
// var root = document.getElementById('root')
// console.log(deepTraversal(root,nodeList=[]))
function deepTraversal1(node) {
    var nodeList = [];
    if (node) {
        var stack = [];
        stack.push(node);
        while (stack.length != 0) {
            var childrenItem = stack.pop();
            nodeList.push(childrenItem);
            var childrenList = childrenItem.children;
            for (var i = childrenList.length - 1; i >= 0; i--)
                stack.push(childrenList[i]);
        }
    }
    return nodeList;
}
// var root = document.getElementById('root')
// console.log(deepTraversal1(root))