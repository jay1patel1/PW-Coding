# Introduction to JavaScript and its fundamentals
## 1.	Explain what javascript is and its role in web development.?

- JavaScript is a programming language that initially ran in browsers and now operates in local machine environments like Node.js.
- Its role in web development is to provide logic, creating an environment for data storage and program execution.

## 2.	Explain the key differences between JavaScript and HTML. Provide examples of situations where you would use each.

**Differences**:
- JavaScript is a full-fledged programming language, while HTML is solely a markup language.
- JavaScript provides logic, whereas HTML is limited to structuring data.

**Where to Use:**
- HTML is employed for structuring content or text on the web. For example, displaying a greeting like "Welcome to the site" is done using HTML.
- JavaScript is applied when logic is needed. For instance, designing a calculator involves using HTML and CSS for visible elements and JavaScript for calculation logic.

## 3. List and describe the five primitive data types in JavaScript.

- There are actually 7 primitive data types:

1. **String:**
   - Any data with text or text + number, e.g., "123WER" or let name = "123".

2. **Number:**
   - Numerical data, e.g., "123".

3. **Boolean:**
   - Represents true or false, e.g., let willYouEatFood = true.

4. **Undefined:**
   - When a variable is declared but not assigned, e.g., let name;.

5. **Null:**
   - Intentionally blank value, e.g., let name = null.

6. **Symbol:**
   - Represents something unique, e.g., let uniqueSymbol = Symbol("unique").

7. **BigInt:**
   - Represents a large number.

## 4.	What is the purpose of declaring variables in javascript, and how do you declare them using the “let” keyword?

- By declaring the variables, we can store lot of thing in the variable like string, number, function, array, object, etc. In short, we can say that it is like chapter in book. We can have lot of data inside the book but we can point that with help of chapter title in index.
- Example of declaring variables with the "let" keyword:

```javascript
let name = "Jay";
let number = 123;
let array = [23, 24, 21, 34];
let greetingsString = "Goodbye";
```

## 5.	Explain the importance of comments in javascript and provide examples of single-line and multi-line comments.

- Comments are essentially notes that the JavaScript interpreter ignores during execution. Comments are helpful for users to understand the purpose of the code. They serve as a form of documentation that enhances code readability.

**Single-line comment**

```javascript
// Declare variables
let value1 = 0;
let value2 = 0;

// Assign values to value1 and value2
value1 = 10;
value2 = 20;

// Calculate the value
let Answer = value1 + value2;

// Output the answer
console.log(Answer);
```

**Multi-line comment**

```javascript
/*
This program
will calculate 2 values
and give you the answer
*/
let value1 = 0;
let value2 = 0;

value1 = 10;
value2 = 20;

let Answer = value1 + value2;

console.log(Answer);
```

## 6.	Explain the importance of choosing meaningful and descriptive variable names in javascript. Provide an example where using a clear identifier improves code readability.

- Meaningful and descriptive name of variable always help to make code readable. It is difficult to read a vague name variable it did not clear the purpose of the variable. Readability is the one of the most important expects of the coding.
- Example:

```javascript
// Not good at readability
Let a = Jay;
Let b = Patel;
// Good at readability
Let userFirstName = Jay;
Let userLastName = Jay;
```

