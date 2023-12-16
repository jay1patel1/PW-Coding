// const createCounter = (n) => {
//     return function() {
//         n = n + 1;
//         console.log(n-1);
//         return (n-1);
//     };
// };

// const counter = createCounter(10);
// counter();
// counter();
// counter();

var createCounter = function(n) {
    return function() {
        console.log(n);
        return n++;
    };
};


let a = createCounter(10)
a()
a()
a()