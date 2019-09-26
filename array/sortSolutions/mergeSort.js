function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let right = arr.splice(mid);
    let left = arr;
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right) {
    let res = [];
    while (left.length && right.length) {
        if(left[0] < right[0]) {
            res.push(left.shift())
        }else {
            res.push(right.shift());
        }
    }
    while (left.length) {
        res.push(left.shift())
    }
    while (right.length) {
        res.push(right.shift())
    }
    console.log(res);
    return res;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
