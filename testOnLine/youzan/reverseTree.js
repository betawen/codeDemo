function reverse(arr, i) {
    console.log(arr[i], i)
    if(arr[i] && i < arr.length) {
        let tmp = arr[2*i + 1];
        if(arr[2*i + 2]) {
            arr[2*i + 1] = arr[2*i + 2];
        }
        if(tmp) {
            arr[2*i + 2] = tmp;
        }
        reverse(arr, 2*i + 1);
        reverse(arr, 2*i + 2);
    }
    return arr;
}
arr = [4,2,null,1,null];
let res = reverse(arr, 0);
console.log(res)