function fibonacci(count) {
    if(count <= 1){
        return 1;
    }
    return fibonacci(count - 1) + fibonacci(count - 2);
}
let arr =[];
for (let i = 0; i < 8; i ++){
    arr.push(fibonacci(i));
}
let res = fibonacci(4);
console.log(arr);