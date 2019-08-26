let n = readline() - '0';
let read = [];
let line;
while(line = readline()) {
    read.push(line.split(' ').map(i => i - '0'));
}
changeNum(n, read)
function changeNum (n, a) {
    let len = a.length;
    let matrix = [];
    switch (n) {
        case 1:
            for (let i = 0; i < len; i ++) {
                for (let j = 0; j < len; j ++) {
                    if (a[j + 1] && a[j + 1][i] === a[j][i]) {
                        a[j][i] += a[j + 1][i];
                        a[j+1][i] = 0;
                        for (let k = 0; k < len; k ++) {
                            if(a[k][i] === 0 && a[j][i] > 0 ) {
                                a[k][i] = a[j][i];
                                a[j][i] = 0;
                                break;
                            }
                        }
                        j ++;
                    }

                }
            }
            break;
        case 2:
            for (let i = 0; i < len; i ++) {
                for (let j = len; j >= 0; j --) {
                    if(a[j-1] && a[j-1][i] === a[j][i]) {
                        a[j][i] += a[j-1][i];
                        a[j-1][i] = 0;
                        j --;
                    }
                    for (let k = len; k >= 0; k --) {
                        if(a[k][i] === 0 && a[j][i] > 0) {
                            a[k][i] = a[j][i];
                            a[j][i] = 0;
                        }
                    }
                }
            }
            break;
        case 3:
            for (let i = 0; i < len; i ++) {
                for (let j = len; j >= 0; j --) {
                    if(a[i][j-1] && a[i][j-1] === a[i][j]){
                        a[i][j] += a[i][j-1];
                        a[i][j-1] = 0;
                        j --;
                    }
                }
            }
        case 4:
            for (let i = 0; i < len; i ++) {
                for (let j = 0; j < len; j ++) {
                    if(a[i][j+1] && a[i][j + 1] === a[i][j]) {
                        a[i][j] += a[i][j + 1];
                        a[i][j + 1] = 0;
                        j ++;
                    }
                }
            }
            break;
    }
    let output = '';
    for (let line of a) {
        for (let i of line) {
            output = output + i + ' ';
        }
        console.log(output);
        output = '';
    }
}