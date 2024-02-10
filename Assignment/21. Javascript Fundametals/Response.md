# Javascript Fundamentals
___
## Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function. The inner function should access both the parameter of outerFunction and a variable declared within outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these variables even after outerFunction has finished executing.

```javascript
function outerFunction (parameter) {
    const outerVariable = 123
    const para = parameter;
    function inner () {
        console.log(`This is parameter give - ${para}`)
        console.log(`This is variable declared - ${outerVariable}`)
    }
    return inner;
}

let a = outerFunction(10);
a();
// This is parameter give - 10
// This is variable declared - 123
```
___

## Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test the function with various patterns and strings.
```javascript
let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
let IndianPhoneRegex = /^(\+?91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
let nameStartFrom_A = /^A/i;
let nameEndWith_A = /a$/i;
function regexChecker (regex, string, type) {
    let a = regex.test(string)
    if (a) {
        console.log(`${string} - is correct ${type}`);
    }
    if (!a) {
        console.log(`${string} - is not ${type}`);
    }
    return (a);
}

regexChecker(emailRegex, "jay1patel1@gmail.com", "email"); // jay1patel1@gmail.com - is correct email
regexChecker(emailRegex, "Jay Patel", "email"); // Jay Patel - is not email
regexChecker(IndianPhoneRegex, "+91-9999999999", "Indian phone number"); // +91-9999999999 - is correct Indian phone number
regexChecker(IndianPhoneRegex, "+08-9090909090", "Indian phone number"); // +08-9090909090 - is not Indian phone number
regexChecker(nameStartFrom_A, "Anita", "name what start with 'A'"); // Anita - is correct name what start with 'A'
regexChecker(nameStartFrom_A, "Kallu", "name what start with 'A'"); // Kallu - is not name what start with 'A'
regexChecker(nameEndWith_A, "Prema", "name what end with 'A'"); // Prema - is correct name what end with 'A'
regexChecker(nameEndWith_A, "Ankit", "name what end with 'A'"); // Ankit - is not name what end with 'A'
```
___

## Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.Create a function that searches for specific character classes in a given string and returns the matches. Test the function with patterns for digits, uppercase letters, lowercase letters, and special characters.
```javascript
const string1 = "The value 1 is smaller than 2"
const string2 = "The Great Himalayas is in India"
const string3 = "Let's Fly In Sky!!"
const string4 = "$400 is equal to ₹33205"

const regExDigits = /\d/g;
const regExUpperCase = /[A-Z]/g;
const regExLowerCase = /[a-z]/g;
const regExSpecialChar = /[^a-zA-Z0-9\s]/g;

function checkTheString (string, regex) {
    const a = string.match(regex);
    // console.log(a)
    console.log(`We found total-${a.length} match`)
    a.forEach((value,index) => {
        console.log(`${index+1} - ${value}`);
    })
};

checkTheString(string1, regExDigits);
// We found total-2 match
// 1 - 1
// 2 - 2
checkTheString(string2, regExUpperCase);
// We found total-4 match
// 1 - T
// 2 - G
// 3 - H
// 4 - I
checkTheString(string3, regExLowerCase);
// We found total-8 match
// 1 - e
// 2 - t
// 3 - s
// 4 - l
// 5 - y
// 6 - n
// 7 - k
// 8 - y
checkTheString(string4, regExSpecialChar);
// We found total-2 match
// 1 - $
// 2 - ₹
```
___

## Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not only checks if there is a match but also extracts specific parts of the matched text using groups. Test the function with patterns that include groups to capture different parts of a date (e.g., day, month, and year) from a given string.
```javascript
const dayRegex = /\b(\d{1,2})\b/;
const monthRegex = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/;;
const yearRegex = /\b(\d{4})\b/;

const date1 = "15 January 2023"
const date2 = "18 March 2028"
const date3 = "25 December 2028"

function checkTheString (string) {
    const date = string.match(dayRegex);
    const month = string.match(monthRegex);
    const year = string.match(yearRegex);

    console.log(`Date: ${date[0]}`);
    console.log(`Month: ${month[0]}`);
    console.log(`Year: ${year[0]}`);
}

checkTheString(date1);
// Date: 15
// Month: January
// Year: 2023
checkTheString(date2);
// Date: 18
// Month: March
// Year: 2028
checkTheString(date3);
// Date: 25
// Month: December
// Year: 2028
```

___

## Q5. You are building a shipping application. Write a program that takes the type of package ("standard","express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.
```javascript
// Shipping application

class Courier {
    constructor(weight,distance,name,type,receiveDate) {
        this.weigth = weight;
        this.distance = distance;
        this.name = name;
        this.time = type;
        this.cost = ((this.costDelta(type))*(distance*0.5)*(weight*0.8));
        this.deliveryDate = this.dateCalculation(receiveDate,this.deliveryDateDelta,type);
        this.message = `Hello ${this.name}, your ${this.time} courier will be delivered on ${this.deliveryDate}. You have paid ₹${this.cost}`
    }

    costDelta (type) {
        switch (type) {
            case "Overnight":
                return 3;
            break;
            case "Express":
                return 2;
            break;
            default:
                return 1;
            break;
        }
    }

    deliveryDateDelta (type) {
        switch (type) {
            case "Overnight":
                return 1;
                break;
            case "Express":
                return 2;
                break;
            default:
                return 3;
                break;
        }
    }

    dateCalculation (date,fnToAddDate,type) {
        const dt = fnToAddDate(type);

        function addDaysToTimestamp(timestamp, daysToAdd) {
            const millisecondsInADay = 24 * 60 * 60 * 1000;
            const newTimestamp = timestamp + (daysToAdd * millisecondsInADay);
            return new Date(newTimestamp);
        }

        let dvDate = addDaysToTimestamp(date, dt);
        return `${dvDate.getDate()}/${dvDate.getMonth()+1}/${dvDate.getFullYear()}`;
    }

}

let courier1 = new Courier(1,200,"Jay Patel","Express",1673883900000);
console.log(courier1.message);
// Hello Jay Patel, your Express courier will be delivered on 18/1/2023. You have paid ₹160
let courier2 = new Courier(0.5,500,"Yogesh Prajapati","Overnight",1674796200000);
console.log(courier2.message);
// Hello Yogesh Prajapati, your Overnight courier will be delivered on 28/1/2023. You have paid ₹300
let courier3 = new Courier(4,500,"Priya Vaidh","Overnight",1675038300000);
console.log(courier3.message);
// Hello Priya Vaidh, your Overnight courier will be delivered on 31/1/2023. You have paid ₹2400
let courier4 = new Courier(4,500,"Mishti Patel","Standard",1675038300000);
console.log(courier4.message);
// Hello Mishti Patel, your Standard courier will be delivered on 2/2/2023. You have paid ₹800
```