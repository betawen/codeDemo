let arr0 = [1,2,3,4,[5,6,7,[8,9]],{a:"a",b:"b",c:{d:'d',e:'e'}},{f:false}];
let arr1 = [1,2,3, [4,5,6]];
let arr2 = [{h:'h'}, {o:'o'}, {hh:{hhh:'hhh'}}];
let obj0 = {a:"a",b:"b",c:{d:'d',e:'e'}, h:'hh'};

let deepCopyObj = (obj, newObj) => {
    for(let [key,value] of Object.entries(obj)){
        if(typeof value === 'object'){
            newObj[key] = {}
            deepCopyObj(value, newObj[key]);
        }else{
            newObj[key] = value;
        }
    }
    return newObj;
}
let copy = deepCopyObj(obj0,{});
obj0.a = 'copy';
console.log(copy);

let deepCopyArr = (arr, newArr) => {
    for(let item of arr) {
        if(Array.isArray(item)){
            deepCopyArr(item);
        }else if(typeof item === 'object'){
            let obj = deepCopyObj(item, {});
            newArr.push(obj);
        }else {
            newArr.push(item);
        }
    }
    return newArr;
}
let copyArr = deepCopyArr(arr2, []);
arr2[2].hh.hhh = 'h'
console.log(copyArr);