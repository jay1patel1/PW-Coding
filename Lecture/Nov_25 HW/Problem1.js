function palindromeChecker(inputValue) {
    // Store input value in string
    let calValue = inputValue

    // Convert Number to string
    if (typeof calValue === "number") {
        calValue = calValue.toString();
    }

    // Check Value
    let palindromeCheck = (calValue === calValue.split('').reverse().join(''))

    // Log Result
    if (palindromeCheck) {
        console.log(`"${calValue}" is palindrome`);
    } else {
        console.log(`"${calValue}" is not palindrome`);
    }
}

palindromeChecker ("racecar");
// racecar is palindrome
palindromeChecker (1234);
// 1234 is not palindrome
palindromeChecker ("hello");
// hello is not palindrome
palindromeChecker (12344321);
// 12344321 is palindrome