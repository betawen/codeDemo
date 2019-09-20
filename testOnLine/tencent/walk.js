function walk(str,n) {
    let index = 0;
    let state = [];
    while (index < str.length) {
        if(str[index] === 'T') {
            let tmp = [index,0];
            while (str[index] === 'T' && index < str.length) {
                tmp[1] ++;
                index ++;
            }
            state.push(tmp);
        }
        index ++;
    }
    // console.log(state[0][1]);
    if(state.length === 0){
        return str.length - n % 2;
    }else if(state.length === 1) {
        if(n === state[0][1]){
            return str.length;
        }else {
            if(n > state[0][1]) {
                return str.length - (n - state[0][1]) % 2;
            }
        }
    }
}

let res = walk('TFTFT',2);
console.log(res)