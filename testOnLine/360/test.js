function getSize(i,j,num){
    if(i % (N - 1) === 0 && j % (M - 1) === 0){
        if(i === 0 && j === 0){
            return ;
        }
        if(i === 0){
            return ;
        }
        if(j === 0){
            return ;
        }
    }
    if(i % (N - 1) === 0 || j % (M - 1) === 0 ){
        if(i === 0){
            return ;
        }
        if(j === 0){
            return ;
        }
        if(i === N - 1){
            return ;
        }
        if(j === M - 1){
            return ;
        }
    }

}