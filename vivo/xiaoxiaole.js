/**
 * Welcome to vivo !
 */

function solution(beans) {

    // TODO Write your code here
    // 暴力求解
    let res = 0;
    let obj = {};
    for(let b of beans) {
        if(obj[i]) {
            obj[i] ++;
        }else {
            obj[i] = 1;
        }
    }
    for (let key of Object.keys(obj)) {
        res += obj[key];
    }
    return res;
}

while (line = readline()) {
    var beans = line.split(" ");
    print(solution(beans));
}