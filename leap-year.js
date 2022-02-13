function isLeapYear (year) {
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2220;
const isYearLeapYear = isLeapYear (myYear);
console.log ('Is year leap year: ', isYearLeapYear);
