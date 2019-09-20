let number0 = 0;
let number1 = 1;
let bool0 = false;
let bool1 = true;
let string0 = '0';
let string1 = '1';

function deepComp(compA, compB) {
    if(typeof compA !== typeof compB){
        return false;
    }
    if(compA == compB){
        return true;
    }else if(Array.isArray(compA) && Array.isArray(compB)){
        if(compB.length === compA.length){
            compA.every((item,index) => {
                return deepComp(item, compB[index]);
            })
        }else {
            return false;
        }
    }

}