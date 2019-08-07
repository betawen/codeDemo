function FindPath(root, expectNumber) {
    // find left
    if(root == null){
        return [];
    }
    let arr = [];
    let sum = 0;
    findTarget(root, expectNumber, [], arr, sum);
    console.log(arr)
    return arr;
}

function findTarget(root, target, path, arr, sum) {
    let tmp = [];
    for(let i of path){
        tmp.push(i);
    }
    tmp.push(root.val);
    sum += root.val;
    if(sum > target){
        return;
    }
    if(sum == target && root.left === undefined && root.right === undefined){
        arr.push(tmp);
        return;
    }
    if(sum < target){
        if(root.left !== null && root.left !== undefined){
            findTarget(root.left, target, tmp, arr, sum);
        }
        if(root.right !== null && root.right !== undefined){
            findTarget(root.right, target, tmp, arr, sum);
        }
    }
}

FindPath({
    val:1,
    left:{
        val:2,
        left: {
            val: 4
        },
        right: {
            val: 6
        }
    },
    right:{
        val:8,
        left:{
            val:5,
        },
        right:{
            val: 3
        }
    }
}, 9)