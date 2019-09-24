let n = readline() - '0';
let read = [];
for(let i  = 0; i < n; i ++) {
    read.push(readline().split(' '));
}

function checkVersion(arr) {
    let v1 = arr[0].split('.').map(i => i - '0');
    let v2 = arr[1].split('.').map(i => i - '0');
    let len = v1.length < v2.length ? v1.length : v2.length;
    let i = 0;
    while (i < len) {
        if(v1[i] < v2[i]) {
            return true;
        }
        if(v1[i] > v2[i]) {
            return false;
        }
        i ++;
    }
    if(i < v2.length) {
        while (i < v2.length) {
            if(v2[i] > 0) {
                return true;
            }
            i ++;
        }
    }
    return false;
}

for (let i of read) {
    console.log(checkVersion(i));
}