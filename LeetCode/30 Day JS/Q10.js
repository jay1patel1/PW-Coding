const once = function(fn) {
    let offSwitch = true;
    return function(...args){
        let returnArg
        offSwitch ? (returnArg = fn(...args), offSwitch = false) : returnArg = undefined;
        return returnArg;
    };
};

let run = once((a,b,c) => (a + b + c));
let a = run(1,2,3);
let b = run(2,3,6);

console.log(a)
console.log(b)