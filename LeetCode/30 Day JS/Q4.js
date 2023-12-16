const createCounter = function(init) {
    let value = init
    const returnObject = {
        increment: () => {
            value = value + 1;
            return value;
        },
        reset: () => {
            value = init;
            return value;
        },
        decrement: () => {
            value = value - 1;
            return value;
        }
    }
    return returnObject
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
console.log(counter.increment())