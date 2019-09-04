// let str = read_line();
let str = 'a<<b((c)<)'
let queue = [];
let output = '';
for(let i of str) {
    console.log(i)
    if(i !== '<' && i !== ")") {
        queue.push(i);
    }else if(i === '<') {
        if(queue.length && queue[queue.length - 1] !== '(' && queue.length - 1 !== ")"){
            queue.pop();
        }
    }else if(i === ")") {
        if(queue.includes('(')) {
            while(queue.pop() !== "(") {
            }
        }
    }
}
for(let i of queue) {
    output += i;
}
console.log(output);
// print(output);