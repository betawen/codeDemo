function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let count = {};
    let mid = Math.floor(numbers.length / 2) + 1;
    for(let i of numbers) {
        if(count[i]) {
            count[i] ++;
        }else {
            count[i] = 1;
        }
        if(count[i] >= mid){
            return i;
        }
    }
    return 0;
}

let res = MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]);
console.log(res);