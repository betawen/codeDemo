function quickSort(arr, left, right) {
    // 初始化参数
    let start = undefined === left ? 0: left;
    let end = undefined === right ? arr.length - 1 : right;
    left = start;
    right = end;
    // 递归结束条件
    if(right - left < 1) {
        return arr;
    }
    // 选择枢纽元
    let privotIndex = left + Math.floor((right-left-1) / 2);
    let privot = arr[privotIndex];
    console.log(arr,left,right,privotIndex,privot);
    // 每次遍历完成比枢纽元小的巨左，比枢纽元大的居右
    while (left <= right) {
        while (left <= right && arr[left] <= privot) {
            left ++;
        }
        if(left < privotIndex && arr[left] >= privot) {
            arr[privotIndex] = arr[left];
            arr[left] = privot;
            privotIndex = left;
        }
        while (left <= right && arr[right] >= privot) {
            right --;
        }
        if(right > privotIndex && arr[right] <= privot) {
            arr[privotIndex] = arr[right];
            arr[right] = privot;
            privotIndex = right;
        }
    }
    // 将枢纽元左边的部分进行划分
    quickSort(arr,start, privotIndex - 1);
    // 将枢纽元右边部分进行划分
    quickSort(arr, privotIndex + 1, end);
    return arr;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]