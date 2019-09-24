var a = [1,2,3,4,5,6,7,8]; // 8个数
var b = [11,12,13,14,15,3,16,17]; //8个数
function testFor() {
    for(var k=0;k<a.length;k++){
        console.log('444');
        for(var i=0;i<a.length;i++){
            for(var j=0;j<b.length;j++){
                if( a[i]==b[j] ){
                    console.log('555')
                    return false;
                }
                console.log('111');
            }
            console.log('222');
        }
        console.log('333');
    }
}
// testFor();
bbq:
    for(var j=0;j<a.length;j++){
        ccc:
            for(var i =0;i<a.length;i++){
                console.log(i)
                if( i==5 ){
                    break bbq; //直接跳出bbq外层循环
                }
            }
    }

function testFor2() {
    bbq:
        for(var k=0;k<a.length;k++){
            console.log('444');
            ccc:
                for(var i=0;i<a.length;i++){
                    ddd:
                        for(var j=0;j<b.length;j++){
                            if(j == 2){
                                console.log('break')
                                break;
                            }
                            console.log('j '+j);
                        }
                    console.log('i '+i);
                }
            console.log('k '+k);
        }
}

testFor2();