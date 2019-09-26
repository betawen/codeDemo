Array.prototype.max = function () {
    let arr = this;
    return  arr.reduce((prev,curr) => Math.max(prev, curr));
}

let arr = [0,-1,5,3];
console.log(arr.max());
console.log(Math.max(...arr));