var twoSum = function (nums, target) {
    let map = {};
    let index = [];
    for(let i = 0; i < nums.length; i ++){
        map[nums[i]] = i;
    }
    for(let i of nums){
        if(map[target - i] !== undefined){
            index.push(map[target - i]);
            if(index.length == 2){
                return index;
            }
        }
    }
    console.log(index);
    return index;
}
twoSum([1,2,2,3],3);