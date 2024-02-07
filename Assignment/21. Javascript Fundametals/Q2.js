let emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
let IndianPhoneRegex = /^(\+?91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
let nameStartFrom_A = /^A/i;
let nameEndWith_A = /a$/i;
function regexChecker (regex, string, type) {
    let a = regex.test(string)
    if (a) {
        console.log(`${string} - is correct ${type}`);
    }
    if (!a) {
        console.log(`${string} - is not ${type}`);
    }
    return (a);
}

regexChecker(emailRegex, "jay1patel1@gmail.com", "email");
regexChecker(emailRegex, "Jay Patel", "email");
regexChecker(IndianPhoneRegex, "+91-9999999999", "Indian phone number");
regexChecker(IndianPhoneRegex, "+08-9090909090", "Indian phone number");
regexChecker(nameStartFrom_A, "Anita", "name what start with 'A'");
regexChecker(nameStartFrom_A, "Kallu", "name what start with 'A'");
regexChecker(nameEndWith_A, "Prema", "name what end with 'A'");
regexChecker(nameEndWith_A, "Ankit", "name what end with 'A'");