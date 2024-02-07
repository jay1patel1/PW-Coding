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
```

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
