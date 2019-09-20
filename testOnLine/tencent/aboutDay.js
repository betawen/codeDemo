let input = readline().split(' ');
let year = input[0] - '0';
let month = input[1] - '0';
let day = input[2] - '0';

let days = [31,28,31,30,31,30,31,31,30,31,30,31];
function checkYear(year) {
    let res = year % 3200 && year % 172800;
    if(year % 400 === 0) {
        if(year % 3200 === 0) {
            if(year % 172800 !== 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }else if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    return false;
}
if(checkYear(year)) {
    days[1] += 1;
}else {
    days[1] = 28;
}

if(days[month - 1] < day) {
    day -= days[month - 1];
    month ++;
}

month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;
console.log(year + '-' + month + '-' + day);