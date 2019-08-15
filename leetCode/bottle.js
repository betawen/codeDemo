function checkNum(num){
    console.log(num)
    if(num <= 1){
        return 0;
    }
    if(num == 2){
        return 1;
    }
    return ~~(num / 3) + checkNum(~~(num / 3) + num % 3);
}
function check(input){
    let inputArr = input.split('\n');
    console.log(inputArr)
    let output = '';
    for(let i = 0; i < inputArr.length - 1; i ++){
        console.log(inputArr[i])
        output += checkNum(inputArr[i] - '0') + '\n';
    }
    return output;
}

let res = check('59' +
    '\n0');
console.log(res);