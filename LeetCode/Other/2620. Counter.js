/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function(n) {

    let memory = n

    return function() {
        let returnValue = memory
        memory = memory + 1;
        console.log(returnValue)
        return returnValue;
    };
};

let counter = createCounter(10)
counter();
counter();
counter();

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

Other solution
// let createCounter = function(n) {
//     let a = n
//     return function() {
//         return a++
//     };
// };