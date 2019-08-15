function longestPalindrome(s) {
    if('' === s){ return '';}
    let sub = '';
    let i = 0;
    let j = 0;
    let maxSub = {
        max: 1,
        str: s[i]
    }
    while (i < s.length){
        sub += s[i];
        j = i + 1;
        if(s[j] === sub[sub.length - 1]){
            getStr(sub,s,j,sub.length - 1,maxSub);
        }
        if(s[j] === sub[sub.length - 2]){
            getStr(sub,s,j,sub.length - 2,maxSub);
        }
        i ++;
    }
    console.log(maxSub)
    return maxSub.str;
}
function getStr(sub, s, j, k,maxSub){
    let tmp = '';
    while (j < s.length && k >= 0 && s[j] === sub[k]) {
        tmp += s[j];
        j++;
        k--;
    }
    let str = sub.substring(k + 1) + tmp;
    if(tmp.length && maxSub.max < str.length){
        maxSub.max = str.length;
        maxSub.str = str;
    }
}
longestPalindrome('abaab')