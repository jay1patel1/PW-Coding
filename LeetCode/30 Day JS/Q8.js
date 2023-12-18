const functions = [x => x + 1, x => x * x, x => 2 * x]

const compose = function (inputFunctions) {

    return function (x) {
        if (inputFunctions.length === 0) {
            return x;
        } else {
            let returnValue = x;
            for (let i = (inputFunctions.length - 1); i >= 0; i--) {
                returnValue = inputFunctions[i](returnValue);
            }
            return returnValue
        }
    }
}

let result = compose(functions);
console.log(result(4));