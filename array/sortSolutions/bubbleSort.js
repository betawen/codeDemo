function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i --) {
        let end = 0;
        for (let j = 0; j < i; j ++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                end = j + 1;
            }
        }
        i = end;
        console.log(`round: ${i} => ${arr}`)
    }
    return arr;
}

let arr = [3,6,9,1,5,3,2,4,0,10,11,12,13];
console.log(bubbleSort(arr));
