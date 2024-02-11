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

___

## Q4
### Response for (a.)
```javascript
const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade:"A"},
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B"},
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A"},
    // Add more students as needed
];


// Function to add a student
function addStudent (array,id,firstname,lastname,age,grade) {
    array.push(
        {
            id: id,
            firstName: firstname,
            lastName: lastname,
            age: age,
            grade: grade
        }
    )
}

addStudent(students,4,"Jay","Patel","32","B");
console.log(students)
// [
//     { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
//     { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' },
//     { id: 4, firstName: 'Jay', lastName: 'Patel', age: '32', grade: 'B' }
// ]
```

### Response for (b.)
```javascript
// Function to update property
function editStudentInformation (array,id,propertyToChange,change) {
    array.forEach((object,index) => {
        if (object.id === id) {
            array[index][propertyToChange] = change;
        }
    })
}

editStudentInformation(students,4,"age",28);
console.log(students);
// [
//     { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
//     { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' },
//     { id: 4, firstName: 'Jay', lastName: 'Patel', age: 28, grade: 'B' }
// ]
```

### Response for (c.)
```javascript
// Function to delete property
function deleteStudent (array,id) {
    array.forEach((object,index) => {
        if (object.id === id) {
            array.splice(index,1);
        }
    })
}

deleteStudent(students,4);
console.log(students);
// [
//     { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
//     { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' }
// ]
```

### Response for (d.)
```javascript
function listStudent (array) {
    array.forEach((obj) => {
        console.log(`StudentID: ${obj.id} || Name: ${obj.firstName} ${obj.lastName} || Age: ${obj.age} || Grade: ${obj.grade}`)
    })
}

listStudent(students);
// StudentID: 1 || Name: John Doe || Age: 20 || Grade: A
// StudentID: 2 || Name: Jane Smith || Age: 22 || Grade: B
// StudentID: 3 || Name: Bob Johnson || Age: 19 || Grade: A
```

### Response for (e.)
```javascript
//Find Student by grade
function grade (array,property,key) {
    const filterArray = array.filter((student) => {
        return (student[property] === key);
    })
    console.log(filterArray);
}

grade(students,"grade", "A");
// [
//     { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
//     { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' }
// ]
grade(students,"grade", "B");
// [
//     { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' }
// ]
```

### Response for (f.)
```javascript
//Find Student age average
function ageAverage (array, prop) {
    if (typeof array[0][prop] === "number"){
        let sum = array.reduce((acc,cv) => {
            return (cv.age + acc);
        },0)
        const average = sum/array.length;
        console.log(`Average ${prop} of student is - ${Math.round(average)}`)
        return average;

    } else {
        console.log("Given Property is not a number")
    }
}

ageAverage(students,"age")
// Average age of student is - 20
```

## Q5
### Response
```javascript
const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true,
}

for (const studentKey in student) {
    console.log(`Property: ${studentKey}, Value: ${student[studentKey]}`)
}
```