// Sanity Check + More Than Zero Function
const sanityCheck = (value) => {
    let input = value;

    if (typeof value !== "number") {
        input = parseInt(value);
        if (isNaN(value)) {
            console.log("Enter Valid Number");
            return;
        }
    } else if (value <= 0) {
        console.log(`Enter value bigger than zero`);
        return
    }
    console.log("Yes", typeof value);
    return input
}

const fizzBuzz = (input) => {
    let checkedValue = sanityCheck(input);
    let fizzBuzzArray = []
    
    if (typeof checkedValue === "undefined") {
        return; 
    }

    for (let index = 1; index < checkedValue; index++) {
        let canDividedBy3 = (index % 3) === 0 ? true : false;
        let canDividedBy5 = (index % 5) === 0 ? true : false;
        
        if (canDividedBy5 && canDividedBy3) {
            fizzBuzzArray.push ("Fizz-Buzz")
        } else if (canDividedBy5) {
            fizzBuzzArray.push ("Buzz")
        } else if (canDividedBy3) {
            fizzBuzzArray.push ("Fizz")
        } else {
            fizzBuzzArray.push (index)
        }
    }
    console.log(fizzBuzzArray);
    return fizzBuzzArray;
}

fizzBuzz ("28")