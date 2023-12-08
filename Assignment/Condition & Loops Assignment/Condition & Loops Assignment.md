# Conditions and Loops
## Q1. What are conditional statements? Explain conditional statements with syntax and examples.
- **Definition** 
    - Conditional syntax used to control the flow of execution based on specific conditions. It ables to make decision based on the bases of whether condition is true or false. For example, we are making code of user will be able to vote or not depend on the age. Program will allow only if the age is above 18 to make such decision conditions are used.
- **Syntax**
    ``` Javascript
    // Normal condition syntax
        if (Condition) {
            True condition execution
        } else {
            False condition execution
        }
    // Switch case syntax
        switch (key) {
        case value:
            True condition execution
            break;

        default:
            False condition execution
            break;
        }
    ```
- **Example**
    ``` Javascript
    // Normal Condition syntax
        let userAge = 10;

        if (userAge>18) {
            console.log("You are able to vote");
        } else {
            console.log("You are not able to vote");
        }

        // Result:
        // You are not able to vote

        // **********************************************************

        // Switch case syntax
        let userRating = 3;

        switch (userRating) {
            case 1:
                console.log("Poor Service");
                break;
            case 2:
                console.log("Okay Service");
                break;
            case 3:
                console.log("Good Service");
                break;
            case 4:
                console.log("Best Service");
                break;
            case 3:
                console.log("Nailed it!!!!");
                break;
            default:
                console.log("I don't know the ratings");
                break;
        }

        // Result:
        // Good Service
    ```
## Q2. Write a program that grades st9dents based on their marks.
### If greater than 90 then A Grade
### If between 70 and 90 then a B grade
### If between 50 and 70 then a C grade
### Below 50 then an F grade
- **Code**
    ``` Javascript
    const gradingFunction = function (marks) {
        switch (true) {
            case marks > 100:
                console.log("You enter incorrect marks");
                break;
            case marks > 90:
                console.log("You got an A grade");
                break;
            case marks > 70:
                console.log("You got an B grade");
                break;
            case marks > 50:
                console.log("You got an C grade");
                break;
            case marks > 0:
                console.log("You got an F grade");
                break;

            default:
                console.log("You enter incorrect marks");
                break;
        }
    }

    gradingFunction (100);
    // Result : You got an A grade
    gradingFunction (75);
    // Result : You got an B grade
    gradingFunction (40);
    // Result : You got an F grade
    gradingFunction (64);
    // Result : You got an C grade
    gradingFunction (53);
    // Result : You got an C grade
    gradingFunction (101);
    // Result : You entered incorrect marks
    gradingFunction ("Thirty");
    // Result : You entered incorrect marks
    gradingFunction (34);
    // Result : You got an F grade
    ```
## Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and examples.
- **Definition**
    - Loops are one of the important control structure in javascript. It allow user to do execute block of code repetitively. It is essential do some of the repetitive task. For example user need to console log 1 to 1000. This kind of task easily done by the loops. There are three types of loops, as following.

    **1.“For” loop**
    - This is the most used loop in the Javascript. this loop repeats until a specified condition evaluates to false. 
    - **Syntax**
        ```Javascript
            for (initialization; condition; afterthought) {
                // Code block  to be exected at each loop
            }
        ```
    - **Example**
        ```Javascript
            //Print Hello world five times.
            for (i=0; i<5; i++) {
                console.log("Hello world")
            }
            // Result
            // Hello world
            // Hello world
            // Hello world
            // Hello world
            // Hello world
        ```

    **2.“While” loop**
    - Exact opposite to for loop, a while statement executes its statements as long as a specified condition evaluates to true.
    - **Syntax**
        ```Javascript
        while (condition) {
            // Code block  to be exected at each loop
        };
        ```
    - **Example**
        ```Javascript
            //Print Hello world five times.
            let i = 0;
                while (i<5) {
                    console.log("Hello world")
                    i = i+1;
                };
            // Result
            // Hello world
            // Hello world
            // Hello world
            // Hello world
            // Hello world
        ```

     **3.“Do while” loop**
    - Do while loop is kind of similar to while loop, just difference is in “Do while loop condition will be checked at the last only.” It is useful when user want to execute the code before condition checked. 
    - **Syntax**
        ```Javascript
            do
                statement
            while (condition)
        ```
    - **Example**
        ```Javascript
            //Print Hello world five times.
            let i = 0;
            do {
                i = i+1;
                console.log ("Hello World")
            } while (i<5)
            // Result
            // Hello world
            // Hello world
            // Hello world
            // Hello world
            // Hello world
        ```

## Q4. Generate numbers between any 2 given numbers.
### const num1 = 10;
### const num2 = 25;
### Output: 11, 12, 13, ..., 25
- **Code**
    ``` Javascript
    let rangecreator = function (start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
    };

    rangecreator(1, 10);
    // Result:
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    // 10
    rangecreator(25, 33);
    // Result:
    // 25
    // 26
    // 27
    // 28
    // 29
    // 30
    // 31
    // 32
    // 33
    rangecreator(5000, 5010);
    // Result:
    // 5000
    // 5001
    // 5002
    // 5003
    // 5004
    // 5005
    // 5006
    // 5007
    // 5008
    // 5009
    // 5010
    ```
## Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.
- **Code**
    ``` Javascript
    // ascending order 1 to 25
    console.log("ascending order");
    let i = 0
    while (i<25) {
        i = i+1;
        console.log(i);
    }

    // descending order 25 to 1
    console.log("descending order");
    let x = 25
    while (x>0) {
        console.log(x);
        x = x-1;
    }

    // Result
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    // 10
    // 11
    // 12
    // 13
    // 14
    // 15
    // 16
    // 17
    // 18
    // 19
    // 20
    // 21
    // 22
    // 23
    // 24
    // 25
    // descending order
    // 25
    // 24
    // 23
    // 22
    // 21
    // 20
    // 19
    // 18
    // 17
    // 16
    // 15
    // 14
    // 13
    // 12
    // 11
    // 10
    // 9
    // 8
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1
    ```