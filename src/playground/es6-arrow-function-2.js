const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));


const user = {
    name: 'Juwan',
    cities: ['New York', 'Atlanta', 'Miami'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

// challenge are
const multiplier = {
    num: [2, 3, 4],
    multiplyBy: 5,
    multiply() {
        return this.num.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());