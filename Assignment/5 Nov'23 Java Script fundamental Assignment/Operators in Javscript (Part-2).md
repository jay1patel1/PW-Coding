# Operators in Javscript (Part-2)
## Problem statement 1
### Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.
- There is only one ternary operator in javascript (Condition ? if condition is true : if condition is false) The ternary operator is the short hand notation for if else statement where we have very small out put we can use the ternary operator it is not advisable to use ternary operator where we have large condition, because it reduce the readability at larger conditions should always use the if else statement.
    ``` javascript
        function checkOddOrEven (inputNumber) {
            let value = {
                value: inputNumber,
                isnumber: true,
                remainder: 0,
            }

            // Check if the given value is a number and Calculate remainder
            let numberValueCheck =
                typeof value.value !== "number" 
                    ? ((value.isnumber = false), "Given value is not a number")
                    : ((value.isnumber = true), value.remainder = value.value%2, "Processing to check if value is even or odd");

            // Print Status
            console.log(numberValueCheck);
            
            // Check it is even or odd and declare the result
            let evenOddCheck = 
                value.remainder > 0
                    ? (`Given value ${value.value} is odd`)
                    : (`Given value ${value.value} is even`)
            
            //  Print the message if it is number 
            console.log(
                value.isnumber
                    ? evenOddCheck
                    : "Enter correct value");
        }

        checkOddOrEven(56);
    ```
## Problem statement 2
### Describe the usage of the comma operator in JavaScript and provide an example.
- The comma operator is used to update multiple variable at once like in array and object
    - For example
        ``` javascript
            // Array inputs are separated by comma and added multiple input.
            let array = [10,20,30]
            // Object inputs are separated by comma and added multiple input.
            let zooAnimal = {
                catfamily: "Tiger",
                bird: "Parrot"
            };
        ```
- Other charestrestic of comma operator is it evolutes both of its operands but, returns the value of the last operands.
    - For example
        ``` javascript
            let value = (10+20 , 10 * 20);
            console.log(x);
            // answer will be 200 as it is retuning the las operands only.
        ```

## Problem statement 3
### use a nested ternary operator to check that a number is positive, negative or zero. you have to print "positive" if the number is positive and similarly for negative and zero also.
``` javascript
```

## Problem statement 4
### use ternary operator to check that a person in eligible to vote or not by checking his age. if the age of the person is less that 18 then "You cannot vote" should be logged else "You can vote" should be logged.
``` javascript
```