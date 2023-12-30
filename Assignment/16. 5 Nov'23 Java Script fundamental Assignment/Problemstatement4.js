const checkVoteEligibility = function (inputAge) {
    // Declare object for user
    let userData = {
        age : inputAge,
        isAgeNumber : false,
        isAbleToVote : false
    }

    // Clean up data
    typeof userData.age !== "number"
    ? userData.age = parseInt(userData.age)
    : undefined

    isNaN (userData.age)
    ? console.log ("Please enter value in numerical format")
    : userData.isAgeNumber = true

    // Check Able to vote or not
    userData.isAgeNumber
    ? userData.age >= 18
        ? console.log(`Your age is ${userData.age}, You are able to vote`)
        : console.log(`Your age is ${userData.age}, You are not able to vote`)
    : undefined
}

checkVoteEligibility (30);
checkVoteEligibility (23);
checkVoteEligibility (12);
checkVoteEligibility (18);
checkVoteEligibility ("12");
checkVoteEligibility ("Thirty");