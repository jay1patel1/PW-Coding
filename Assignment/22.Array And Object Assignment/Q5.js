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