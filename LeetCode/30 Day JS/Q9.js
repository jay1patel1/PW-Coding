let ar = [{}, null, "3"]
const argumentsLength = function(...args) {
    return arguments.length;
};

console.log(argumentsLength((ar)));