// function IsPopOrder(pushV, popV)
// {
//     if(pushV.length !== popV.length){
//         return false;
//     }
//     if(pushV == null && popV == null){
//         return true;
//     }
//     if(pushV.length === 1 && pushV[0] !== popV[0]){
//         return false;
//     }
//     let max = pushV.indexOf(popV[0]);
//     let min = pushV.indexOf(popV[0]);
//     for(let i of popV){
//         let index = pushV.indexOf(i);
//         if(index >= max) {
//             max = index;
//             min = index;
//         }
//         if(index <= min) {
//             min = index;
//         }
//         if(index < max && index > min){
//             return false;
//         }
//     }
//     return true;
// }

function IsPopOrder(pushV, popV) {
    let stack = [];
    let index = 0;
    let len = popV.length;
    for(let i of pushV){
        stack.push(i);
        while (index < len && stack[stack.length - 1] === popV[index]){
            stack.pop();
            index ++;
        }
    }
    return stack.length == 0;
}

let res = IsPopOrder([1,2,3,4,5],[3,5,4,2,1]);
console.log(res);
let res1 = IsPopOrder([1,2,3,4,5],[4,3,5,1,2]);
console.log(res1);