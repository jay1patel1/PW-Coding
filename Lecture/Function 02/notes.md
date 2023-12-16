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