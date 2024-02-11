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