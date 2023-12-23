console.log("Question 1");
const number = [1,2,3];
const doubled = number.map(num => num * 2);
console.log(doubled);

console.log("Question 2");
const items = [
    { name: 'Apple', type: 'fruit' },
    { name: 'Monitor', type: 'electronic' },
    { name: 'Orange', type: 'fruit' }
];
const fruitNames = items.filter(item => item.type === 'fruit').map(item => item.name);
console.log(fruitNames);

console.log("Question 3");
const numbers = [1, 2, 3, 4, 5];
let sumOdd = 0;

numbers.forEach(num => {
    if (num % 2 !== 0) {
        sumOdd += num;
    }
});
console.log(sumOdd);

const arr = [1,400,5,6,9]
const result = arr.every((element) => {
    console.log(element);
    return element < 100;
});

Array.from({length:num},(_,i) => i+1);