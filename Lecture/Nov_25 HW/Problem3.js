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
}