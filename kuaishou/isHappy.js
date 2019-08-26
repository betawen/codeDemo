let n = readline() - '0';
let read = [];
for(let i = 0; i < n; i ++) {
    read.push(readline()- '0');
}

let isHappy = n => {
    let set = new Set(), sum
    n += ''
    while (sum !== 1) {
        sum = 0
        for (let i = 0; i < n.length; i++) {
            sum += n[i]*n[i]
        }
        n = sum + ''
        if (set.has(sum)) return false
        set.add(sum)
    }
    return true
}

for(let i of read) {
    console.log(isHappy(i));
}