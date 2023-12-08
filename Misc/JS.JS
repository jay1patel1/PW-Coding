// Normal Condition syntax
let userAge = 10;

if (userAge>18) {
    console.log("You are able to vote");
} else {
    console.log("You are not able to vote");
}

// Result:
// You are not able to vote

// **********************************************************

// Switch case syntax
let userRating = 3;

switch (userRating) {
    case 1:
        console.log("Poor Service");
        break;
    case 2:
        console.log("Okay Service");
        break;
    case 3:
        console.log("Good Service");
        break;
    case 4:
        console.log("Best Service");
        break;
    case 3:
        console.log("Nailed it!!!!");
        break;
    default:
        console.log("I don't know the ratings");
        break;
}

// Result:
// Good Service