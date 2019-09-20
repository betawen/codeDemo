function maxProfit(n,m,matrix) {
    let arr = [];
    let target = [...Array(m)].map((v,i) => i);
    let res = 0;
    let i = 0;
    while (i < matrix.length) {
        let [max, row, col] = findMax(matrix,target);
        res += max;
        target.splice(col,1);
        if(target.length === 0) {
            return res;
        }
        deleteRow(matrix, row);
        deleteCol(matrix, col);
    }
    return res;
}

function findMax(matrix,target) {
    let maxI = 0, maxJ = 0;
    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < target.length; j ++) {
            if(matrix[maxI][maxJ] < matrix[i][j]) {
                maxJ = j;
                maxI = i;
            }
        }
    }
    return [matrix[maxI][maxJ],maxI,maxJ]
}

function deleteRow(matrix, i) {
    matrix.splice(i,1);
}

function deleteCol(matrix, j) {
    for (let i of matrix) {
        i.splice(j, 1);
    }
}

let n = 4, m = 3;
let matrix = [[1,3,3],[2,2,2],[3,2,1],[3,4,5]];
console.log(maxProfit(n,m,matrix));