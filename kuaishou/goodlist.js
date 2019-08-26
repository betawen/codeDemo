let line = readline().split(' ');
let read = [];
let n = line[0] - '0';
let k = line[1] - '0';
let sets = [];
const p = 'points';
const b = 'border';
const t = 'type';
let notFind;
while(line = readline()) {
    let tmp = line.split();
    read.push(tmp);
    if(sets.length) {
        for(let i of sets) {
            if(i[t] === tmp[2] && (i[p].has(tmp[0]) || i[p].has(tmp[1]))) {
                i[p].add(tmp[0]);
                i[p].add(tmp[1]);
            }else if(i[t] !== tmp[2] && (i[p].has(tmp[0]) || i[p].has(tmp[1])) ) {
                if(i[p].has(tmp[0])) {
                    i[b].add(tmp[1]);
                }
                if(i[p].has(tmp[1])) {
                    i[b].add(tmp[0]);
                }
            }else {
                notFind = true;
                break;
            }
        }
    }else {
        notFind = true;
    }
    if(notFind) {
        let obj = {};
        obj[p] = new Set([tmp[0], tmp[1]]);
        obj[t] = tmp[2];
        obj[b] = new Set();
    }
}
let res = n * n
console.log()
