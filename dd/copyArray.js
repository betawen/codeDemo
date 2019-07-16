let arr0 = [1,2,3,4,[5,6,7,[8,9]],{a:"a",b:"b",c:{d:'d',e:'e'}},{f:false}];
let arr1 = [1,2,3, [4,5,6]];
let arr2 = [{h:'h'}, {o:'o'}, {hh:{hhh:'hhh'}}];

let newArray = []
let arrayCopy = (arr) => {
    if(Array.isArray(arr)) {
        for (let item of arr) {
            if(Array.isArray(item)){
                // copy all items of array
                // 数组扁平化
                arrayCopy(item);
            }else if(typeof item === 'object'){
                // copy key of obj
                for(let [key,value] of Object.entries(item)){
                    newArray.push(key);
                    if(typeof value === 'object'){
                        arrayCopy([value])
                    }
                }
            }else {
                newArray.push(item);
            }
        }
    }
}

arrayCopy(arr0);
console.log(newArray);