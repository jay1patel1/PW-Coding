const string1 = "The value 1 is smaller than 2"
const string2 = "The Great Himalayas is in India"
const string3 = "Let's Fly In Sky!!"
const string4 = "$400 is equal to ₹33205"

const regExDigits = /\d/g;
const regExUpperCase = /[A-Z]/g;
const regExLowerCase = /[a-z]/g;
const regExSpecialChar = /[^a-zA-Z0-9\s]/g;

function checkTheString (string, regex) {
    const a = string.match(regex);
    // console.log(a)
    console.log(`We found total-${a.length} match`)
    a.forEach((value,index) => {
        console.log(`${index+1} - ${value}`);
    })
};

checkTheString(string1, regExDigits);
// We found total-2 match
// 1 - 1
// 2 - 2
checkTheString(string2, regExUpperCase);
// We found total-4 match
// 1 - T
// 2 - G
// 3 - H
// 4 - I
checkTheString(string3, regExLowerCase);
// We found total-8 match
// 1 - e
// 2 - t
// 3 - s
// 4 - l
// 5 - y
// 6 - n
// 7 - k
// 8 - y
checkTheString(string4, regExSpecialChar);
// We found total-2 match
// 1 - $
// 2 - ₹