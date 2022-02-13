function inchTofeet (inches) {
    var feet = inches/12;
    return feet;
}

var dadaInches = 156;
var feet = inchTofeet(dadaInches);
console.log('my inches is: ', feet);

var dadiInches = 144;
var feet = inchTofeet(dadiInches);
console.log('your inches is: ', feet);

// miles to kilometer 

function mileTokm (miles) {
    var km = miles * 1.609344;
    return km;
}

var mile = 26.5;
var km = mileTokm(mile);
console.log(km);