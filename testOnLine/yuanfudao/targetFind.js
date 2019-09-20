let line1 = readline().split(' ');
let line2 = readline().split(' ');
let target = line1[1] - '0';
let arr = line2.map(i => i - '0');

// let arr = ['1','2','3'].map(i => i - '0')
// console.log(arr)

function deleteTarget(arr, target) {
    let obj = {};
    for(let i of arr) {
        if(obj[i] === 'target') {
            continue;
        }
        if(obj[i]) {
            obj[i] += 1;
        }else {
            obj[i] = 1;
        }
        if(obj[i] > target) {
            obj[i] = 'target';
        }
    }
    let output = [];
    for(let i of arr){
        if(obj[i] !== 'target'){
            output.push(i)
        }
    }
    console.log(output)
}

deleteTarget('4,3,3,3,1,5,5', 2)