function twoSum(arr,target) {
    let obj = {};
    let len = arr.length;
    for(let i = 0; i < len; i ++) {
        if(obj[target - arr[i]] >= 0) {
            return [obj[target - arr[i]],i];
        }
        obj[arr[i]] = i;
    }
    return [];
}
let res = twoSum([2,7,11,15],26);
console.log(res)