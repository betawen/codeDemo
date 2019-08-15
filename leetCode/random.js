function check(){
    let arr = [];
    while(line = readline()){
        arr.push(line - '0');
    }
    let target = arr.shift();
    let output = [];
    for(let i of arr){
        if(output.indexOf(i) >= 0){
            continue;
        }
    }
    output.sort(-1);
    for(let i of output){
        console.log(i);
    }
}
check();