## Q1. Explain the role of operators in javascript. Why are they essential in programming.
- Operators helps to perform language various operations on data. for example assigning value, calculating the values and its. It is essential in programming is because fo them we will never able to make computer understand what we want to do with the data. for example without "+" assignment how we can as computer to calculate given values so it is and important part of the programming.

## Q2. Describe the categorization of operators in javascript based on their functionality. provide examples for each category.
- Operators are categorized into three catagories as follows.
    1. Arithmetic
    2. Assignment
    3. Comparison. 

- **1. Arithmetic**
    - arithmetic operators helps to perform mathematical operations, here are some example of it.
        - Addition (+)
        - Substraction (-)
        - Multiplication (*)
        - Division (/)
        - Power to (**)
        - Modulus (%)


- **2. Assignment**
    - Assignment operators assign the values. 
        - Equal to (=)
    - There also some assignment + Arithmetic operators.
        - (+=) it will the add the value and after that assign the value that will save some time to write entire synnex.
            - **For example**
                ```javascript
                    let a = 10;
                    a += 20;
                    console.log(a)
                    // the answer will be 30
                ```
- **3. Comparison**
    - Comparison operators compare two values and return ture/false (boolean data type). Here are some example of it
        - Equality (==)
        - Strict equality (===)
        - Not equal (!=)
        - Strict non equal (!==)

## Q3. Differentiate between unary, binary, and ternary operators in JavaScript. Give examples of each.
- **Unary Operators**
    - Unary are the operators what works on the only one value for example changing the value from 10 to -10.
        - **For example:**
            ```javascript
                let number = 10;
                let changedvalue = -number // unary operators
            ```

- **Binary Operators**
    - Binary operators needs two values and perform any task on it. multiply two values.
        - **For example:**
            ```javascript
                let number1 = 10;
                let number2 = 20;
                let sum = number1 + number2; // binary operators
            ```
- **Ternary Operators**
    - This is kind of operator what require three values for example if it is false it do something if it is true then do something else. this is know as the ternary operators
        - **For example:**
            ```javascript
                let age = 65;
                let siniorcitzenage = 60 // Sinior citizenage limit
                let discount;

                let willgetdiscount = age >= siniorcitzenage ? "Relase coupen" : "No discount"; // ternary operator

                console.log(willgetdiscount); // Ternary operators
            ```
    - also note than in javascript this the only ternary operators there are no other ternary operators apart from this. 

## Q4.  Discuss the precedence and associativity of operators in JavaScript. Why is understanding these concepts important?

- Precedence and Associativity is the rules which explains how computer calculates. 

- **Precedence**
    - Precedence is meaning when we have list of calculation for example:
        ```javascript 
            let number = 10+2-3*4/2;
        ```
        What operation will be done first is know as the precedence. in javascript alway multiplication and division will be done and later on additional and substraction will be done. This kind of precedence help to understand what action will be done first. that will help to dubug the code in future and write the cleaner code. However, it is never advised to to use precedence like shown in example it is not cleaner code at all so advised to use  "()" to septate calculations. 
- **Associativity**
    - again like precedence associativity also explain what code will give priority when every mathematical operator is same. for example:
        ```javascript 
            let number = 10+2+4+6;
        ```
        as per associativity code will go always left to right it will calculate (10+2) + 2 + 4 + 6; and like that. it will always goes left to right. again it helps to know what will be calculate first. 

