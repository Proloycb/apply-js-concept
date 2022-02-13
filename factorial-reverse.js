// function getFunction (number){
//     let factorial = 1;
//     let i = number;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }

// const firstFactorial = getFunction (6);
// console.log (firstFactorial);

function getFunction2 (number) {
    let factorial = 1;
    for (let i = number; i>=1; i--) {
        factorial = factorial*i;
    }
    return factorial;
}

const firstFactorial = getFunction2 (9);
console.log (firstFactorial);