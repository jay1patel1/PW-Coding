## Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use the arrow function to calculate the square of a given number and display the result.
- **Code**
    ```javascript
        const square = (value) => {
            console.log(value**2);
        };

        square(5);
        // 25
        square(34);
        // 1156
        square(45);
        // 2025
    ```
## Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a personalized greeting message. Use this function to greet three different people.
- **Code**
``` javascript
        function generateGreeting (username) {
            const returnMessage = `Hello ${username}, Greetings !! Welcome to home`
            console.log(returnMessage);
            return returnMessage;
        }

        generateGreeting ("Aarti");
        // Hello Aarti, Greetings !! Welcome to home
        generateGreeting ("Jay");
        // Hello Jay, Greetings !! Welcome to home
        generateGreeting ("Mishti");
        // Hello Mishti, Greetings !! Welcome to home
        generateGreeting ("Krishnakant")
        // Hello Krishnakant, Greetings !! Welcome to home
        console.log(generateGreeting ("Geeta")); // to check it is returning the value or not as mention in the question. 
        // Hello Geeta, Greetings !! Welcome to home
        // Hello Geeta, Greetings !! Welcome to home
```

## Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result.
- **Code**
    ``` javascript
        ((number) => {console.log(number**2);}) (5);
        // result = 25
        ((number) => {console.log(number**2);}) (10);
        // result = 100
        ((number) => {console.log(number**2);}) (345);
        // result = 119025
    ```
## Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.
- **Code**
-   ```Javscript

    ```
## Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.
- **Code**
-   ```Javscript

    ```
## Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept arguments one at a time and return a new function until all arguments are provided. Then, it should execute the original function with all arguments. Test the curry function with a function that adds two numbers.
- **Code**
-   ```Javscript

    ```