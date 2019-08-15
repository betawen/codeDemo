/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let i = 0;
    let num = '0';
    let state = 1;
    while (i < str.length && str[i] === ' '){
        i ++;
    }
    if(str[i] === '-'){
        state = 0;
        i ++;
    }else if(str[i] === '+'){
        state = 1;
        i ++;
    }
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        num += str[i];
        i ++;
    }
    i = state ? (num - '0') : -(num - '0');
    console.log(i);
    if(i < -2147483648){
        return -2147483648;
    }
    if(i > 2147483647){
        return 2147483647;
    }
    return i;
};

let res = myAtoi("-91283472332");
console.log(res);