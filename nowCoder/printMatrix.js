function printMatrix(matrix)
{
    // write code here
    let endX = matrix.length - 1;
    let endY = matrix[0].length - 1;
    let start = 0;
    let arr = [];
    while (endX >= start && endY >= start){
        let i = start ;
        let j = start ;
        // right, start,start -> start, endY-1
        while (j <= endY ){
            // console.log('r'+matrix[i][j]);
            arr.push(matrix[i][j])
            j ++;
        }
        // down, start, endY -> endX-1, endY
        j --;
        i ++;
        while (i <= endX && j >= start) {
            // console.log('d'+matrix[i][j]);
            arr.push(matrix[i][j]);
            i ++;
        }
        // left, endX, endY -> endX-1, start+1
        i --;
        j --;
        while (j >= start && i > start){
            // console.log('l'+matrix[i][j]);
            arr.push(matrix[i][j]);
            j --;
        }
        // up, endX-1, start -> start+1, start
        i --;
        j ++;
        while (i >= start + 1 && j < endY && i < endX){
            // console.log('u'+matrix[i][j]);
            arr.push(matrix[i][j]);
            i --;
        }
        start ++;
        endX --;
        endY --;
    }
    console.log(arr)
    return arr;
}
// printMatrix([[1,2],[3,4]])
// printMatrix([[1]])
// printMatrix([[1,2,3],[4,5,6],[7,8,9]])
// printMatrix([[1],[2],[3],[4],[5]])
// printMatrix([[1,2,3]])
printMatrix([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]]);