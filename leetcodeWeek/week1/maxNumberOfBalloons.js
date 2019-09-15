/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
        let arr = ['b', 'a', 'l', 'o', 'n'];
        let obj = {};
        for(let s of text) {
            if(arr.includes(s)) {
                if(obj[s]) {
                    obj[s] ++;
                }else{
                    obj[s] = 1;
                }
            }
        }
        console.log(obj);
        let min;
        for(let key of arr) {
            if(undefined === obj[key]) {
                min = 0;
                break;
            }
            if(key === 'o' || key === 'l') {
                obj[key] = ~~(obj[key] / 2);
            }
            if(min > obj[key] || undefined === min) {
                min = obj[key];
            }
        }
        return min;
    };

let res = maxNumberOfBalloons('balon');
console.log(res)