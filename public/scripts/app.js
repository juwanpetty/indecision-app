'use strict';

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

var user = {
    name: 'Juwan',
    cities: ['New York', 'Atlanta', 'Miami'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

// challenge are
var multiplier = {
    num: [2, 3, 4],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.num.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
