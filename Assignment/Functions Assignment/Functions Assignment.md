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
      ``` javascript
    function calculateTax(income) {
        const userDetail = {
            userIncome: income,
            taxSlabWise: [],
            tax: [],
            userTotalTax: 0
        }

      function taxCalculation() {
          let taxableIncome = userDetail.userIncome;
          let tax = 0;
          const taxConstant = 300000;
          function slabTaxCalculation(value,percentage) {
              const slabTax = (value * percentage) / 100;
              userDetail.taxSlabWise.push(slabTax);
              userDetail.tax.push(tax);
          }
          while (tax < 30) {
              if (taxableIncome>taxConstant){
                  slabTaxCalculation(taxConstant,tax);
                  taxableIncome = taxableIncome - taxConstant;
              } else {
                  slabTaxCalculation(taxableIncome,tax);
                  break
              }
              if (tax < 20) {
                  tax = tax + 5;
              } else {
                  tax = tax + 10;
              }
          }
          (taxableIncome > 0 && tax > 20) ? slabTaxCalculation(taxableIncome,tax) : undefined;
      }
      taxCalculation();
      console.log(`Your total taxable income is ${userDetail.userIncome < 300000 ? "None" : userDetail.userIncome - 300000}`);

      if (userDetail.userIncome > 300000) {
          for (let i = 1; i < userDetail.taxSlabWise.length; i++) {
              console.log(`Your slab-${i}(${userDetail.tax[i]}%) tax is ${userDetail.taxSlabWise[i]}`);
          }
      }
    }
        calculateTax(2100000);
        // Result
        // Your total taxable income is 1800000
        // Your slab-1(5%) tax is 15000
        // Your slab-2(10%) tax is 30000
        // Your slab-3(15%) tax is 45000
        // Your slab-4(20%) tax is 60000
        // Your slab-5(30%) tax is 180000
      
        calculateTax(202000);
        // Result
        // Your total taxable income is None
        // Your slab-1(5%) tax is 25
      
        calculateTax(300500);
        // Result
        // Your total taxable income is 500
      
        calculateTax(501500);
        // Result
        // Your total taxable income is 201500
        // Your slab-1(5%) tax is 10075
      
        calculateTax(725500);
        // Result
        // Your total taxable income is 425500
        // Your slab-1(5%) tax is 15000
        // Your slab-2(10%) tax is 12550
      
        calculateTax(1080500);
        // Result
        // Your total taxable income is 780500
        // Your slab-1(5%) tax is 15000
        // Your slab-2(10%) tax is 30000
        // Your slab-3(15%) tax is 27075
      
        calculateTax(1398200);
        // Result
        // Your total taxable income is 1098200
        // Your slab-1(5%) tax is 15000
        // Your slab-2(10%) tax is 30000
        // Your slab-3(15%) tax is 45000
        // Your slab-4(20%) tax is 39640
      
        calculateTax(1760900);
        // Result
        // Your total taxable income is 1460900
        // Your slab-1(5%) tax is 15000
        // Your slab-2(10%) tax is 30000
        // Your slab-3(15%) tax is 45000
        // Your slab-4(20%) tax is 60000
        // Your slab-5(30%) tax is 78270
      
        calculateTax(3442700);
        // Result
        // Your total taxable income is 3142700
        // Your slab-1(5%) tax is 15000
        // Your slab-2(10%) tax is 30000
        // Your slab-3(15%) tax is 45000
        // Your slab-4(20%) tax is 60000
        // Your slab-5(30%) tax is 582810
      ```
  
## Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.
- **Code**
-   ```Javscript

    ```
## Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept arguments one at a time and return a new function until all arguments are provided. Then, it should execute the original function with all arguments. Test the curry function with a function that adds two numbers.
- **Code**
-   ```Javscript

    ```