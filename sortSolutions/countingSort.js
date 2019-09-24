function countingSort(arr) {
    let newArr = [];
    for (let i of arr) {
        if(newArr[i]) {
            newArr[i] ++;
        }else {
            newArr[i] = 1;
        }
    }
    let res = [];
    for (let j = 0; j < newArr.length; j ++) {
        while(newArr[j]) {
            res.push(j);
            newArr[j] --;
        }
    }
    console.log(newArr.length)
    return res;
}

let arr=[3,44,38,5,47,15,26,26,27,2,46,4,19,50,48];
console.log(countingSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 26, 38, 44, 46, 47, 48, 50]