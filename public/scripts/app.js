'use strict';

function square(x) {
    return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(4));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
var getFirstNameTwo = function getFirstNameTwo(fullName) {
    return fullName.split(' ')[0];
};

var fullName = 'Juwan Petty';
console.log(getFirstName(fullName));
console.log(getFirstNameTwo(fullName));
