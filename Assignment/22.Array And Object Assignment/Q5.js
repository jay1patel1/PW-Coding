const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true,
}

for (const studentKey in student) {
    console.log(`Property: ${studentKey}, Value: ${student[studentKey]}`)
}

// Property: name, Value: Alice
// Property: age, Value: 22
// Property: major, Value: Computer Science
// Property: GPA, Value: 3.8
// Property: isEnrolled, Value: true
