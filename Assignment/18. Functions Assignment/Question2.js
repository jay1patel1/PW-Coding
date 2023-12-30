function generateGreeting (username) {
    const returnMessage = `Hello ${username}, Greetings !! Welcome to home`
    console.log(returnMessage);
    return returnMessage;
}

generateGreeting ("Aarti");
// Hello Aarti, Greetings !! Welcome to home
generateGreeting ("Jay");
// Hello Jay, Greetings !! Welcome to home
generateGreeting ("Mishti");
// Hello Mishti, Greetings !! Welcome to home
generateGreeting ("Krishnakant")
// Hello Krishnakant, Greetings !! Welcome to home
console.log(generateGreeting ("Geeta")); // to check it is returning the value or not as mention in the question. 
// Hello Geeta, Greetings !! Welcome to home
// Hello Geeta, Greetings !! Welcome to home