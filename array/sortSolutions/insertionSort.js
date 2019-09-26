function insertionSort(arr) {
    for (let i = 0; i < arr.length; i ++) {
        let index = i;
        while (index > 0 && arr[index] < arr[index-1]) {
            let tmp = arr[index];
            arr[index] = arr[index-1];
            arr[index-1] = tmp;
            index --;
        }
        console.log(`round: ${i} => ${arr}`);
    }
    return arr;
}

let arr = [3,6,9,1,5,3,2,4,0,10,11,12,13];
console.log(insertionSort(arr));