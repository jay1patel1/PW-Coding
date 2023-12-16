# Function 02

---

## How to identify function expression?

- If valid function did not start with the syntax "Function" it is function expression.

## Why we need that?

- We can use function as the argument, variable or etc. to use it multiple way we can use the argument.

---

## What are function arguments?

- Function declaration

    ```javascript
    function example (argument) {
        // Function code
    }
    ```
- Function expression
    ```javascript
    // Type 1
    const example = function process() {
        // Function code
    }
    // Type 2
    const example = function () {
        // Function code
    }
    // Type 3
    const example = () => {
        // Function code
    }
    // Type 4
    (function () {
        // Function code
    })()
    // Type 5
    (function example () {
        // Function code
    })()
    ```

## Type of function expression
- Named function expression
- anonymous function expression
- IIFE (immediately invoked function expression)

## What is named function expression?
- The function what have the name is known is known as the named function.
- To call the function we can use the name of variable inside which we have used called function. 
    ```javascript
    const example = function process () {
        // Function code
    };
    ```

## What is named anonymous function expression?
- The function what do not have the name is known is known as the named function.
- To call the function we can use the name of variable inside which we have used called function. 
    ```javascript
    const example = function () {
        // Function code
    };
    ```
## The name is not used is it matter If I do not use the name?
- It can help in recursion. in recursion we use fuction name so it is required.
    ```javascript
    const example = function process(n) {
        n = 1 ? return n : return (process (n)+process (n-1)) 
    };
    ```
- It helps to debug the code.
- Code readability.

## Notes on code readability 
- whenever your write function name person who is reading a code should be able to guess the name of the function. Code readability should be alway priority. Writing clean code is very important. 

## Console.trace
- console.trace is used when we have to trace the function it is useful when to debug code. 