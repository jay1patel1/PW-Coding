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