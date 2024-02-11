const student = {
    rollNo: 54
}

let extensibleStatus;

// Addition can be done
student.standard = 10;
console.log(student);
extensibleStatus = Object.isExtensible(student)
console.log(extensibleStatus)
// { rollNo: 54, standard: 10 }
// true

//immutable
Object.preventExtensions(student)
extensibleStatus = Object.isExtensible(student)
student.class = "D";
console.log(student);
console.log(extensibleStatus)
// { rollNo: 54, standard: 10 }
// false

const teacher = {
    subject: "Math",
}
let sealedStatus;
sealedStatus = Object.isSealed(teacher)

// Seal status check
console.log(sealedStatus);
// false

// Seal object
Object.seal(teacher);

// Seal status check
sealedStatus = Object.isSealed(teacher);
console.log(sealedStatus);
// True


// try and deleting property on sealed object.
teacher.name = "Sanket Singh"
delete teacher.subject;
console.log(teacher)
// { subject: 'Math' }