const maxProduct = function(nums) {
    if (!nums || nums.length === 0) return 0;

/**
 * maxArr 是一个二维数组
 * maxArr[i][0] 储存最大值
 * maxArr[i][1] 储存最小值
 */
const maxArr = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (i === 0) {
        maxArr[i] = [num, num];
    } else if (nums[i] < 0) {
        maxArr[i] = [Math.max(num, num * maxArr[i - 1][1]), Math.min(num, num * maxArr[i - 1][0])];
    } else {
        maxArr[i] = [Math.max(num, num * maxArr[i - 1][0]), Math.min(num, num * maxArr[i - 1][1])];
    }
}

return Math.max(...maxArr.map(item => item[0]));
};

//
// let max = nums[0];
// let tmp = max;
// let len = nums.length;
// if(len === 1) {
//     print(nums[0])
// }
//
// if(len >= 2) {
//     let i = 1;
//     while(i < len){
//         tmp *= nums[i];
//         if(tmp >= max) {
//             max = tmp;
//         }else if(nums[i] <= 0 ){
//             tmp = 1;
//         }
//         i ++;
//     }
//     print(max);
// }
