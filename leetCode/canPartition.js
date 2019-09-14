/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    nums.sort((a,b) => {return a-b});
    console.log(nums);
    for(let i = nums.length - 1; i > 0; i --) {
        let arr = nums;
        let res = getSum(arr, i);
        if(res) {
            return res;
        }
    }
    return false;
};

function getSum(nums, i) {
    let right = nums.splice(i);
    let left = nums;
    let sumLeft = 0;
    let sumRight = 0;
    for(let i of left) {
        sumLeft += i;
    }
    for(let i of right) {
        sumRight += i;
    }
    return sumLeft === sumRight;
}

console.log(canPartition([1,2,3,5]))