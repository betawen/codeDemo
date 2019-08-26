function Permutation(str)
{
    // write code here
    let res = [];
    let len = str.length;
    if (len === 0) {
        res.push();
    } else if (len === 1) {
        res.push(str);
    } else {
        let obj = {};
        for (let i = 0; i < len; i++) {
            let c = str[i];
            // 用于去重
            if (!obj[c]) {
                let newStr = str.slice(0,i) + str.slice(i+1, len);
                // 递归遍历
                let l = Permutation(newStr);
                for (let j = 0, lenL = l.length; j < lenL; j++) {
                    res.push(c+l[j]);
                }
                obj[c] = true;
            }
        }
    }
    return res;
}
let res = Permutation('abc');
console.log(res);