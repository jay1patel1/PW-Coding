// const example = function process(n) {
//     n === 1 ?  return n : return process (n)+process (n-1) 
// };

// process (15);

// function example (n) {
//     if (n === 1) {
//         return n;
//     } else {
//         return n + example(n-1);
//     }
// }

// console.log(example (15));

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// let index = 0 // Start Point
// index < array.length // Condition
// index++ // Change
// {} // Set of code to run repeatedly

// for (let index = 0; index < 10000000000000; index++) {
//     console.log(index);;
    
// }

// let i = 20;

// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// let n = 5
// for (let i = 0; i <= n; i++) {
//     let abc = ""
//     for (let b = 0; b < n ; b++){
//         abc = abc + " " + "*"
//     }
//     console.log(abc);
//     }

// let number = 5678;
// let sum = 0;
// do {
//     let a = number%10;
//     sum = sum + a;
//     number = number - a;
//     number = number/10;
// } while (number > 0);

// console.log(sum);

const example = function process(n) {
    return n === 10 ? "WOW" : console.log("add 10"); 
}

console.log(example(10));

const example = function process(n) {
    return n = 1 ? n : process (n)*process (n-1) 
};

console.log(example (10));