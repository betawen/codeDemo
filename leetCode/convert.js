function convert(s, numRows) {
    let privot = 2 * (numRows - 1);
    let newStr = '';
    if(s.length === 0 || numRows === 1){
        return s;
    }
    for (let i = 0; i < numRows; i ++){
        let j = i;
        while (j < s.length) {
            // console.log(j)
            newStr += s[j];
            if(i !== 0 && i !== numRows - 1 && j + 2 * (numRows - 1 - i) < s.length){
                console.log(j + 2 * (numRows - 1 - i))
                newStr += s[j + 2 * (numRows - 1 - i)];
            }
            j += privot;
        }
    }
    // console.log(newStr);
    return newStr;
}
let res = convert('A',1);
console.log(res === 'A')