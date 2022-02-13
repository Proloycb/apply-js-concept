function isEven (number) {
    if(number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1698;
const isMyNumberEven = isEven(myNumber);
console.log ('my number is even: ', isMyNumberEven);

function isOdd (number) {
    if (number % 2!=0) {
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd (myNumber);
console.log ('my number is odd: ', isMyNumberOdd);

const herNumber = 1649;
const isNumberOdd = isOdd(herNumber);
console.log ('her number is odd: ', isNumberOdd);