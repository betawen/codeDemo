// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// }

// 方法3
function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}


function flat(arr) {
    let res = [];
    for (let i of arr) {
        if(Array.isArray(i)) {
            res = res.concat(flat(i));
        } else {
            res.push(i)
        }
    }
    return res;
}

let arr = [1,2,3,[4,5,[6]]];
console.log(flatten(arr));
console.log(flat(arr))
