function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i ++) {
        let min = i;
        for (let j = i +1; j < arr.length; j ++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        if(min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
        console.log(`round: ${i} => ${arr}`)
    }
    return arr;
}

let arr = [0,3,6,9,1,5,3,2,4,10];
selectionSort(arr)