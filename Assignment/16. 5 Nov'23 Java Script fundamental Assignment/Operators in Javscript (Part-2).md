# Operators in Javscript (Part-2)
## Problem statement 1
### Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.
- There is only one ternary operator in javascript (Condition ? if condition is true : if condition is false) The ternary operator is the short hand notation for if else statement where we have very small out put we can use the ternary operator it is not advisable to use ternary operator where we have large condition, because it reduce the readability at larger conditions should always use the if else statement.
- **Code**    
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
        checkOddOrEven(57);
        checkOddOrEven("58");
    ```
- **Result**
    ```
    Processing to check if value is even or odd
    Given value 56 is even
    Processing to check if value is even or odd
    Given value 57 is odd
    Given value is not a number
    Enter correct value
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
- **Code**
    ``` javascript
    let findvaluepositiveornegative = function (inputvalue) {
      let value = {
        value: inputvalue,
        ispositive: false,
        isnegative: false,
        iszero: false,
        isnumber: false,
      };

      // Check if the input value is a number
      let checkisnumber =
        typeof value.value !== "number"
          ? (value.isnumber = false)
          : (value.isnumber = true);

      // Check if the input value is positive, negetive or zero
      let nestedcheck = value.isnumber
        ? value.value > 0
          ? (value.ispositive = true)
          : value.value < 0
          ? (value.isnegative = true)
          : (value.iszero = true)
        : undefined; // No action
      // Print the result
      value.isnumber
        ? console.log(
            `The given value ${value.value} is ${
              value.ispositive ? "positive" : ""
            }${value.isnegative ? "negative" : ""}${value.iszero ? "zero" : ""}`
          )
        : console.log("Please enter the number value");
      ("");
    };

    findvaluepositiveornegative(0);
    findvaluepositiveornegative(5);
    findvaluepositiveornegative(-5);
    findvaluepositiveornegative("5");
    ```
- **Result**
    ```
    The given value 0 is zero
    The given value 5 is positive
    The given value -5 is negative
    Please enter the number value
    ```

## Problem statement 4
### use ternary operator to check that a person in eligible to vote or not by checking his age. if the age of the person is less that 18 then "You cannot vote" should be logged else "You can vote" should be logged.
- **Code**
    ```javascript
        const checkVoteEligibility = function (inputAge) {
        // Declare object for user
        let userData = {
            age : inputAge,
            isAgeNumber : false,
            isAbleToVote : false
        }

        // Clean up data
        typeof userData.age !== "number"
        ? userData.age = parseInt(userData.age)
        : undefined

        isNaN (userData.age)
        ? console.log ("Please enter value in numerical format")
        : userData.isAgeNumber = true

        // Check Able to vote or not
        userData.isAgeNumber
        ? userData.age >= 18
            ? console.log(`Your age is ${userData.age}, You are able to vote`)
            : console.log(`Your age is ${userData.age}, You are not able to vote`)
        : undefined
    }

      checkVoteEligibility (30);
      checkVoteEligibility (23);
      checkVoteEligibility (12);
      checkVoteEligibility (18);
      checkVoteEligibility ("12");
      checkVoteEligibility ("Thirty");
    ```
- **Result**
    ```
      Your age is 30, You are able to vote
      Your age is 23, You are able to vote
      Your age is 12, You are not able to vote
      Your age is 18, You are able to vote
      Your age is 12, You are not able to vote
      Please enter value in numerical format
    ```