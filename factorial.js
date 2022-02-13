/*
var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial = factorial * i;
}
console.log (factorial);

*/

function getFunction (number) {
    let factorial = 1;
    for (let i = 1; i<=number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const firstFactorial = getFunction (8);
console.log (firstFactorial);