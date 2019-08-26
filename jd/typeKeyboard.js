var getTimes = function (str) {
    const count = 'count';
    const type = 'type';
    let obj = [];
    let i = 0;
    while(i < str.length) {
        let tmpA = {};
        tmpA[count] = 0;
        while (str[i] >= 'a' && str[i] <= 'z' && i < str.length) {
            tmpA[type] = 2;
            tmpA[count] ++;
            i ++;
        }

        if(tmpA[count]) {
            obj.push(tmpA);
        }
        let tmpB = {};
        tmpB[count] = 0;
        while (str[i] >= 'A' && str[i] <= 'Z' && i < str.length) {
            tmpB[type] = 1;
            tmpB[count] ++;
            i ++;
        }
        if(i === str.length && tmpB[count] >= 2) {
            tmpB['isEnd'] = true;
        }
        if(tmpB[count]) {
            obj.push(tmpB);
        }
    }
    let res = 0;
    for (let i of obj) {
        if(i[type] === 1 && i[count] >= 2) {
            res = res + i[count] + 2;
        }else if(i[type] === 1 && i[count] <= 1) {
            res = res + i[count] + 1;
        }else if(i[type] === 2) {
            res = res + i[count];
        }
        if(i['isEnd']) {
            res --;
        }
    }
    console.log(res, str.length, obj);
}
getTimes('aa')