let data = {a: 1, b: 2, c: 3, d: 4};
let arr = [];

let res = Object.keys(data).filter(function(x){
    if(data[x] > 2) {
        return x;
    }
})
console.log(res);