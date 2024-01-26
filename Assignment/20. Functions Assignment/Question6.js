const twoValueCal = function (valueA) {
    return function (valueB) {
        return valueA + valueB;
    }
}

const valueAdd1 = twoValueCal(345);
const valueAdd2 = valueAdd1(678);
console.log(valueAdd2)
// Result: 1023

const valueAdd3 = twoValueCal(60);
const valueAdd4 = valueAdd3(90);
console.log(valueAdd4)
// Result: 150