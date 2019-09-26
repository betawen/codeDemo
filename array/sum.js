Array.prototype.sum = function () {
    let arr = this;
    return arr.reduce((prev, curr) => prev + curr);
}

console.log([1,2,6,3].sum())

function sum(arr) {
    if(arr.length < 1){
        return 0;
    }else if (arr.length === 1) {
        return arr[0];
    }else {
        return arr[0] + sum(arr.slice(1));
    }
}
console.log(sum([4,2,1]))