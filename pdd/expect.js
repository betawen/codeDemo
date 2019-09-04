function getP(arr , i) {
    // 数组，输入数组和第i个可能值
    let p1 = 1;
    let p2 = 1;
    for(let val of arr) {
        // 计算为可能行为1-i
        if(val > i) {
            p = p*(i/p)
        }
    }
    for(let val of arr) {
        if(val > i) {
            // 可能行为1到(i-1)
            p = p*((i-1)/val);
        }
    }
    // 可能性为i
    return p1 - p2;
}

let n = readline() - '0';
let line = readline().split('').map(i => i - '0');
let max = 1;
for(let i of line) {
    if(i > max) {
        max = i;
    }
}
let res = 0;
for(let i = 1; i <= max; i ++) {
    res += getP(line,i)*i;
}
console.log(res);