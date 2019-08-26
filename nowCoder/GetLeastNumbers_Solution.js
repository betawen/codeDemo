function GetLeastNumbers_Solution(input, k)
{
    // write code here
    let tmp = input[k - 1];
    let left = 0;
    let right = input.length - 1;
    while(left <= right) {
        while (input[right] >= tmp && left <= right) {
            right --;
        }
        if(left <= right) {
            tmp = input[right];
            input[right] = input[k];
            input[k] = tmp;
            k = right;
        }
        console.log(input, left, right, k)
        while (input[left] < right && left <= right) {
            left ++;
        }
        if(left <= right) {
            tmp = input[left];
            input[left] = input[k];
            input[k] = tmp;
            k = left;
        }
        console.log(input, left, right, k)
    }
}
GetLeastNumbers_Solution([4,5,1,6,2,7,3,8], 8)