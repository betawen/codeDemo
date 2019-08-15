function findBits(num, target) {
    let str = num.toString(2)
    let count = 0;
    let index = -1;
    for(let i = 0; i < str.length - 2; i ++){
        let j = 0;
        let tmp = '';
        while (j < target.length){
            tmp += str[i + j];
            j ++;
        }
        if(tmp === target){
            count ++;
            if(count === 1){
                index = i;
            }
        }
    }
    console.log(`${count} ${index}`);
    return count;
}
findBits(100000, '101');