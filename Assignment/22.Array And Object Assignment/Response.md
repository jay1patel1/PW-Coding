# Array And Object Assigment

___

## Q1.
### Response:

```javascript
const shoppingCart = ["Milk","Coffee","Tea","Honey"];

class Cart {
    constructor(array) {
        this.cart = array;
    }

    checkAndAddFront (item) {
        if (!this.cart.includes(item)) {
            this.cart.unshift(item);
            console.log(`You have added ${item} in your cart.`);
            console.log(`Have a look at your cart ${this.cart}`);
        } else {
            console.log(`You already have ${item} in your cart.`);
            console.log(`Have a look at your cart ${this.cart}`);
        }
    }
    checkAndAddBack (item) {
        if (!this.cart.includes(item)) {
            this.cart.push(item);
            console.log(`You have added ${item} in your cart.`);
            console.log(`Have a look at your cart ${this.cart}`);
        } else {
            console.log(`You already have ${item} in your cart.`);
            console.log(`Have a look at your cart ${this.cart}`);
        }
    }
    checkAllergyAndRemove (allergy) {
        this.cart.forEach((value,index) => {
            if (value === allergy ) {
                this.cart.splice(index,1);
                console.log(`You are allergic to ${value}, ${value} is removed form cart, be safe while you are shopping with us`);
                console.log(`Have a look at your cart ${this.cart}`);
            }
        })
    }
    checkAndReplace (find,replace) {
        this.cart.forEach((value,index) => {
            if (value === find ) {
                this.cart [index] = replace;
                console.log(`You have added ${replace} and removed ${find}`);
                console.log(`Have a look at your cart ${this.cart}`);
            }
        })
    }
}

const cart1 = new Cart(["Milk", "Coffee", "Tea", "Honey"]);

cart1.checkAndAddFront("Meat");
// You have added Meat in your cart.
// Have a look at your cart Meat,Milk,Coffee,Tea,Honey

cart1.checkAndAddBack("Sugar");
// You have added Sugar in your cart.
// Have a look at your cart Meat,Milk,Coffee,Tea,Honey,Sugar

cart1.checkAllergyAndRemove("Honey");
// You are allergic to Honey, Honey is removed form cart, be safe while you are shopping with us
// Have a look at your cart Meat,Milk,Coffee,Tea,Sugar

cart1.checkAndReplace("Tea","Green Tea");
// You have added Green Tea and removed Tea
// Have a look at your cart Meat,Milk,Coffee,Green Tea,Sugar

```
___

## Q2.
### Response:


```javascript
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
```

___

## Q3
### Response for (a.)
```javascript
const student = {
    rollNo: 54
}

// Addition can be done
student.standard = 10;
console.log(student);
// { rollNo: 54, standard: 10 }

//immutable
Object.preventExtensions(student)
student.class = "D";
console.log(student);
// { rollNo: 54, standard: 10 }
```

### Response for (b.)
```javascript
const student = {
    rollNo: 54
}

let extensibleStatus;

// Addition can be done
student.standard = 10;
console.log(student);
extensibleStatus = Object.isExtensible(student)
console.log(extensibleStatus)
// { rollNo: 54, standard: 10 }
// true

//immutable
Object.preventExtensions(student)
extensibleStatus = Object.isExtensible(student)
student.class = "D";
console.log(student);
console.log(extensibleStatus)
// { rollNo: 54, standard: 10 }
// false
```
### Response for (c.)
```javascript
const teacher = {
    subject: "Math",
}
```

### Response for (d.)
```javascript
const teacher = {
    subject: "Math",
}

// Seal the object
Object.seal(teacher);

// tyr add and deleting property on sealed object.
teacher.name = "Sanket Singh"
delete teacher.subject;
console.log(teacher)
// { subject: 'Math' }
```

### Response for (e.)
```javascript
const teacher = {
    subject: "Math",
}
let sealedStatus;
sealedStatus = Object.isSealed(teacher)

// Seal status check
console.log(sealedStatus);
// false

// Seal object
Object.seal(teacher);

// Seal status check
sealedStatus = Object.isSealed(teacher);
console.log(sealedStatus);
// True


// try and deleting property on sealed object.
teacher.name = "Sanket Singh"
delete teacher.subject;
console.log(teacher)
// { subject: 'Math' }
```