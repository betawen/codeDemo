let n = readline() - '0';
let read = [];
for(let i = 0; i < n; i ++) {
    read.push(readline().split(' ').map(i => i - '0'));
}

let i = 0;
let sets = [];
while(i < n) {
    // 第i个人
    let mySet = new Set();
    mySet.add(i);
    let j = i + 1;
    // 跟i是豆油的所有人
    while(j < n && read[i][j] >= 3) {
        // j是i的豆油且i是别人的豆油
        mySet.add(j);
        j ++;
    }
    sets.push(mySet);
    i = j;
}
function isMine(n, i, mySet){
    mySet.add(i);
    let j = i + 1;
    while (j < n) {
        if(read[i][j] >= 3) {
            mySet.add(j);
        }
        j ++;
        i = j;
    }
}
console.log(sets.length);