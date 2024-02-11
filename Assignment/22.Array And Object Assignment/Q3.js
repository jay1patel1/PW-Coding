const student = {
    rollNo: 54
}

// Addition can be done
student.standard = 10;
console.log(student);
// { rollNo: 54, standard: 10 }

//immutable
Object.preventExtensions(student)
student.class = "D";
console.log(student);
// { rollNo: 54, standard: 10 }