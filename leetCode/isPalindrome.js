/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = 0;
    if(x >= 0 && x <= 9){
        return true;
    }
    if(x < 0 || x % 10 === 0){
        return false;
    }
    while (x){
        num = num*10 + x % 10;
        x = ~~(x / 10);
        if(num === x || num === ~~(x / 10) && ~~(x / 10) !== 0){
            return true;
        }
    }
    return false;
};
let res = isPalindrome(21120);
console.log(res);