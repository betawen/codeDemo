function solution(input) {
    let stack = [];
    let tree = null;
    let i = 0;
    let j = 0;
    while (i < input.length) {
        if(input[i] !== ")") {
            stack.push(input[i]);
        }else if(input[i] === ")") {
            j = stack.length - 1;
            while (stack[j] !== "(") {
                // 标记当前左右
                let left = true;
                if(stack[j] >= '0' && stack[j] <= '9') {
                    if(stack[j] === ',') {
                        left = false;
                        j --;
                    }
                    if(left) {
                        tree[left] = stack[j];
                        left = false;
                    }else {
                        tree[right] = stack[j];
                    }
                    j --;
                }
            }
        }
        i ++;
    }
}