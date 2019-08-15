/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let month = (date[5] - '0')*10 + (date[6] - '0');
    let day = (date[8] - '0')*10 + (date[9] - '0');
    let year = (date[0] - '0')*1000 + (date[1] - '0')*100 + (date[2] - '0')*10 + (date[3] - '0');
    // console.log(day,month,year);
    let monthAndDay = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        monthAndDay[1] = 29;
    }
    let dayOfYear = day;
    for(let i = 1; i < month; i ++){
        dayOfYear += monthAndDay[i-1];
    }
    // console.log(dayOfYear)
    return dayOfYear;
};

dayOfYear('2004-03-01')