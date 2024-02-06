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