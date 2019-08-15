/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    if(!len1 && !len2){
        return 0;
    }
    if(!len1){
        let mid = ~~((len2 - 1) / 2);
        return len2 % 2 ? nums2[mid]: (nums2[mid] + nums2[mid + 1]) / 2;
    }
    if(!len2){
        let mid = ~~((len1 - 1) / 2);
        return len1 % 2 ? nums1[mid]: (nums1[mid] + nums1[mid + 1]) / 2;
    }
    let k = ~~((len1 + len2 - 1) / 2);
    let len1_start = 0;
    let len1_end = len1 - 1;
    let left = ~~((len1_end - len1_start ) / 2);
    let right = k - left;
    let maxLeft = nums1[0];
    let minRight = nums2[k];
    if(len1 > len2){
        let tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    while(len1_end > len1_end){
        left = ~~((len1_end - len1_start) / 2);
        right = k - left;
        console.log(len1_start,len1_end,left,right);
        if(nums1[left] < nums2[right]){
            if(nums2[right - 1]){
                maxLeft = nums1[left] > nums2[right - 1] ? nums1[left] : nums2[right - 1];
            }else {
                maxLeft = nums1[left];
            }
            if(nums1[left + 1]){
                minRight = nums2[right] < nums1[left + 1] ? nums2[right] : nums1[left + 1];
            }else {
                minRight = nums2[right];
            }
            len1_start = left;
        }else {
            if(nums2[right + 1]){
                minRight = nums1[left] < nums2[right + 1] ? nums1[left] : nums2[right + 1];
            }else {
                minRight = nums1[left];
            }
            if(nums1[left - 1]){
                maxLeft = nums2[right] > nums1[left - 1] ? nums2[right] : nums1[left - 1];
            }else {
                maxLeft = nums2[right];
            }
            len1_end = left;
        }
        if(maxLeft < minRight){
            break;
        }
    }
    console.log(maxLeft,minRight);
    return (len1 + len2) % 2 ? maxLeft : (maxLeft + minRight) / 2;
};
let res = findMedianSortedArrays([1,3],[2,8,9,10]);
console.log(res);