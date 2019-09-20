function getSize(i,j,matrix, N, M){
    let tmp = matrix[i][j] - '0';
    const bottom = 1;
    const top = 1;
    let backNum = i > 0 ? matrix[i-1][j] - '0': 0;
    let rightNum = j < M - 1 ? matrix[i][j+1] - '0': 0;
    let fontNum = i < N - 1 ? matrix[i+1][j] - '0': 0;
    let leftNum = j > 0 ? matrix[i][j-1] - '0': 0;
    let back = tmp - backNum >= 0 ? tmp - backNum : 0;
    let right = tmp - rightNum >= 0 ? tmp - rightNum : 0;
    let font = tmp - fontNum >= 0 ? tmp - fontNum : 0;
    let left = tmp - leftNum >= 0 ? tmp - leftNum : 0;
    let res = top + bottom + back + font + right + left;
    console.log(res);
    return res;
}

function read(){
    let read = [];
    let line;
    let readline = ['2 2', '2 1', '1 1'];
    while ( line = readline.shift()){
        read.push(line.split(' '));
    }
    // let read = [['2','2'],['2','1'],['1', '1']]
    console.log(read)
    let [N,M] = read.shift();
    console.log(read);
    let i = 0;
    let result = 0;
    while (i < N - '0'){
        let j = 0;
        while (j < M - '0'){
            result += getSize(i,j,read, N, M);
            j ++;
        }
        i ++;
    }
    console.log(result)
}
read();