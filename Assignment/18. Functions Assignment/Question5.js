let factorialValue = function (n) {
    let value = n;

    // Value sanity check
    if (typeof value !== "number") {
        let convertedValue = parseInt(value);
        if (isNaN(convertedValue)) {
            console.log("The entered value is not a number");
            return;
        } else {
            value = convertedValue;
        }
    }

    // Check it is positive value
    if (value < 0) {
        console.log("The entered Value is smaller than zero");
        return;
    }

    // Find factorial value
    let getFact = function (x) {
        if (x === 0) {
            return 1;
        } else {
            return x * getFact(x-1);
        }
    }

    console.log(getFact(value));
}

factorialValue("10");
// 3628800
factorialValue(11);
// 39916800
factorialValue("Ten");
// The entered value is not a number
factorialValue(-10);
// The entered Value is smaller than zero
factorialValue("-20")
// The entered Value is smaller than zero

