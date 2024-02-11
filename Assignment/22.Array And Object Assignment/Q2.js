class AgeObject {
    constructor(ages) {
        this.ageArray = ages;
        this.sortedArray = this.ageArray.sort ((a,b) => a - b);
        this.minAge = this.sortedArray[0];
        this.maxAge = this.sortedArray[this.sortedArray.length - 1];
        this.medianAge = this.medianAgeFn(this.sortedArray);
        this.averageAge = this.averageAgeFn(this.sortedArray);
        this.ageRange = `The range of age is ${this.minAge} - ${this.maxAge}`;
        this.diffMinAge = `Absolute difference between min-age (${this.minAge}) and average-age (${this.averageAge}) is ${Math.abs(this.averageAge-this.minAge)} years.`;
        this.diffMaxAge = `Absolute difference between max-age (${this.maxAge}) and average-age (${this.averageAge}) is ${Math.abs(this.averageAge-this.maxAge)} years.`;
    }

    medianAgeFn (array) {
        if (array.length%2 === 0) {
            let value = (array.length/2);
            return `${array[value-1]} and ${array[value]}`;
        } else {
            let value = ((array.length-1)/2);
            return array[value];
        }
    }

    averageAgeFn (array) {
        const sum = array.reduce((acc,c_Value) => {return acc + c_Value},0);
        const average = sum / array.length;
        const floorValue = Math.round(average)
        return floorValue;
    }
}

let ages1 = new AgeObject([19,22,19,24,20,25,26,24,25,24]);
let ages2 = new AgeObject([19,22,19,24,20,25,26,24,25]);

console.log(ages1.sortedArray);
// [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

console.log(ages1.minAge);
// 19

console.log(ages1.maxAge);
// 26

console.log(ages1.medianAge);
// 24 and 24

console.log(ages2.medianAge);
// 24

console.log(ages1.averageAge);
// 23

console.log(ages1.ageRange);
// The range of age is 19 - 26

console.log(ages1.diffMinAge);
// Absolute difference between min-age (19) and average-age (23) is 4 years.

console.log(ages1.diffMaxAge);
// Absolute difference between max-age (26) and average-age (23) is 3 years.