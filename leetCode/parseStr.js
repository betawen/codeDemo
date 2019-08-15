function parseStr(str) {
    let len = str.length;
    let state = 0;
    let statePre = 0;
    let tmp = '';
    let i = 0;
    while (i < len) {
        // console.log(str[i], state);
        if(str[i] >= '0' && str[i] <= '9'){
            let tmp = '';
            let j = i;
            if(state === 0){
                while (str[j] >= '0' && str[j] <= '9' && j < len){
                    tmp += str[j];
                    j ++;
                }
                if(str[j] === ',' || j === len){
                    console.log(tmp - '0');
                    i = j;
                }else {
                    while (str[j] !== '"' && str[j] !== ',' && j < len){
                        tmp += str[j];
                        j ++;
                    }
                }
                tmp = '';
            }
        }
        if(str[i] === ',' && state === 0){
            i ++;
            if(str[i + 1] === ','){
                console.log('--');
            }
        }
        if(str[i] === '"' && state === 0){
            tmp += str[i];
            statePre = state;
            state = 1;
        }
        let j = i + 1;
        while (str[j] !== '"' && str[j] !== ',' && j < len){
            tmp += str[j];
            j ++;
        }
        if(j === len){
            console.log(tmp);
        }
        if((str[j] === '"' && str[j + 1] === ',') && (state === '1' || (state === 2 && statePre === 3) || state === 3 && statePre === 2)){
            console.log(tmp.substring(1));
            i = j + 1;
            statePre = state;
            state = 0;
        }
        if(str[j] === '"' && str[j + 1] === '"'){
            if(state === 1 || state === 3){
                statePre = state;
                state = 2;
            }
            str += str[j];
        }
        if(str[j] === ','){
            if(state === 1 || state === 2){
                statePre = state;
                state = 3;
            }
        }
        i = j;
    }
}
// let str = readline();
parseStr('1,,"b,"""');