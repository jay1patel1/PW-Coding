const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade:"A"},
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B"},
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A"},
    // Add more students as needed
];


// Function to add a student
function addStudent (array,id,firstname,lastname,age,grade) {
    array.push(
        {
            id: id,
            firstName: firstname,
            lastName: lastname,
            age: age,
            grade: grade
        }
    )
}

addStudent(students,4,"Jay","Patel",32,"B");
console.log(students)
// [
//     { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
//     { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' },
//     { id: 4, firstName: 'Jay', lastName: 'Patel', age: '32', grade: 'B' }
// ]

// Function to update property
function editStudentInformation (array,id,propertyToChange,change) {
    array.forEach((object,index) => {
        if (object.id === id) {
            array[index][propertyToChange] = change;
        }
    })
}

editStudentInformation(students,4,"age",28);
console.log(students);
// [
//     { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
//     { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' },
//     { id: 4, firstName: 'Jay', lastName: 'Patel', age: 28, grade: 'B' }
// ]

// Function to delete property
function deleteStudent (array,id) {
    array.forEach((object,index) => {
        if (object.id === id) {
            array.splice(index,1);
        }
    })
}

deleteStudent(students,4);
console.log(students);
// [
//     { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
//     { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' }
// ]

// List students
function listStudent (array) {
    array.forEach((obj) => {
        console.log(`StudentID: ${obj.id} || Name: ${obj.firstName} ${obj.lastName} || Age: ${obj.age} || Grade: ${obj.grade}`)
    })
}

listStudent(students);
// StudentID: 1 || Name: John Doe || Age: 20 || Grade: A
// StudentID: 2 || Name: Jane Smith || Age: 22 || Grade: B
// StudentID: 3 || Name: Bob Johnson || Age: 19 || Grade: A

//Find Student by grade
function grade (array,property,key) {
    const filterArray = array.filter((student) => {
        return (student[property] === key);
    })
    console.log(filterArray);
}

grade(students,"grade", "A");
// [
//     { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
//     { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' }
// ]
grade(students,"grade", "B");
// [
//     { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' }
// ]

