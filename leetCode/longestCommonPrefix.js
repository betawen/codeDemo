/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length || !strs[0].length){
        return '';
    }
    let prefix = '';
    let tmp = strs[0][0];
    let i = 0;
    let j = 0;
    while(tmp){
        for(let i =0; i < strs.length; i ++){
            if(strs[i][j] !== tmp){
                return prefix;
            }
        }
        prefix += tmp;
        j ++;
        tmp = strs[i][j];
    }
    return prefix;
};
let res = longestCommonPrefix(["flower","flow","flight"]);
console.log(res)