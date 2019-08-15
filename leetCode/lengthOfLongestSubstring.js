/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s == null){
        return ;
    }
    let len = s.length;
    let max = 0;
    let i = 0;
    let j = 1;
    let subStr = s[0];
    while (i < len - 1){
        let index;
        while (j < len){
            index = subStr.indexOf(s[j]);
            if(index >= 0){
                break;
            }
            subStr += s[j];
            j ++;
        }
        max = max > subStr.length ? max : subStr.length;
        if(index < 0){
            return max;
        }
        i = index + 1;
        if(len - i <= max){
            return max;
        }
        subStr = subStr.substring(index + 1);
    }
    return subStr.length;
};

let max = lengthOfLongestSubstring('pwwkew')
console.log(max)
