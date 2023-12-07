/*
*****
Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.
*****
- There is only one ternary operator in javascript (Condition ? if condition is true : if condition is false) The ternary operator is the short hand notation for if else statement where we have very small out put we can use the ternary operator it is not advisable to use ternary operator where we have large condition, because it reduce the readability at larger conditions should always use the if else statement.
*/ 

// Code

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
            ? console.log(evenOddCheck)
            : console.log("Enter correct value"));
}

checkOddOrEven(56);





