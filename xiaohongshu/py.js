// let n = read_line() - '0';
// let read = [];
// for (let i = 0; i < n; i ++) {
//     read.push(read_line().split().map(i => i - '0'));
// }
read = [[3, 2],
    [1, 1],
    [1, 3],
    [2, 2]]
// 存key
let arr1 = [];
// 存value
let arr2 = [];
// 存key,value
for(let line of read) {
    arr1.push(line[0]);
    arr2.push(line[1]);
}
// 按值升序
arr2.sort((a, b) => {return a - b});
// 按key升序
arr1.sort((a, b) => {return a - b});
let res = 0;
while (read.length) {
    // 找到索引最小的一个输出
    let line1 = -1;
    let line2 = -1;
    let i = 0;
    let idx1 = -1;
    let idx2 = -1;
    for (let line of read) {
        if(arr1.indexOf(line[0]) === 0) {
            line1 = i;
            idx2 = arr2.indexOf(line[1]);
        }
        if(arr2.indexOf(line[1]) === 0) {
            line2 = i;
            idx1 = arr1.indexOf(line[0]);
        }
        i ++;
    }
    // 两个都是最小的情况下选另一个更小的；
    if(idx1 > idx2) {
        // 输出arr1
        res ++;
        read.splice(line2, 1);
        arr1.shift();
        arr2.splice(idx2, 1);
    } else {
        res ++;
        read.splice(line1, 1);
        arr2.shift();
        arr1.splice(idx1, 1);
    }
}
console.log(res);
