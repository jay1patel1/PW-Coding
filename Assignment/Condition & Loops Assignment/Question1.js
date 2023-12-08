const gradingFunction = function (marks) {
    switch (true) {
        case marks > 100:
            console.log("You enter incorrect marks");
            break;
        case marks > 90:
            console.log("You got an A grade");
            break;
        case marks > 70:
            console.log("You got an B grade");
            break;
        case marks > 50:
            console.log("You got an C grade");
            break;
        case marks > 0:
            console.log("You got an F grade");
            break;

        default:
            console.log("You enter incorrect marks");
            break;
    }
}

gradingFunction (100);
// Result : You got an A grade
gradingFunction (75);
// Result : You got an B grade
gradingFunction (40);
// Result : You got an F grade
gradingFunction (64);
// Result : You got an C grade
gradingFunction (53);
// Result : You got an C grade
gradingFunction (101);
// Result : You entered incorrect marks
gradingFunction ("Thirty");
// Result : You entered incorrect marks
gradingFunction (34);
// Result : You got an F grade