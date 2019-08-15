/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0;
    let j = 0;
    let str = '';
    let lens = s.length;
    let lenp = p.length;
    while(i < s.length && j < p.length){
        if(p[j] !== s[i] && p[j] !== '.' && p[j + 1] !== '*'){
            return false;
        }
        str += p[j];
        if(s[i] === p[j] || p[j] === '.'){
            i ++; j ++;
        }
        if(p[j] === '*' && (p[j - 1] === s[i] || p[j - 1] === '.')){
            i ++;
        }
        console.log(s,str);
    }
    return i === s.length && j === p.length;
};
let res = isMatch('abaaa', 'ab*a*c*a')
console.log(res)

