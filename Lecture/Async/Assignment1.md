## Predict the out of following questions without executing them:

## Problem 1
```
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");
```
### Response
- A
- C
- B

## Problem 2
```
setTimeout(() => {
    console.log("A");
    setTimeout(() => console.log("B"), 1000);
}, 1000);
console.log("C");
```
### Response
- C
- A
- B

## Problem 3
```
setTimeout(() => console.log("A"), 3000);
setTimeout(() => console.log("B"), 2000);
setTimeout(() => console.log("C"), 1000);
```

### Response
- C
- B
- A

## Problem 4
```
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

### Response
- A
- C
- B

## Problem 5
```
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
```
### Response
- 3
- 3
- 3

## Problem 6
```
setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => console.log("C"), 500);
    }, 1000);
}, 1500);
```
### Response
- A
- B
- C

## Problem 7
```
console.log("A");
setTimeout(() => console.log("B"), 1000);
for(let i = 0; i < 1000000000; i++) {}  // Long loop
console.log("C");
```
### Response
- A
- C
- B

## problem 8
```
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
```
### Response
- 3
- 3
- 3

## Problem 9
```
for (var i = 0; i < 3; i++) {
    setTimeout((j) => {
        console.log(j);
        setTimeout(() => console.log(j + 1), 1000);
    }, i * 2000, i);
}
```

## Problem 10
```
setTimeout(() => console.log("A"), 2500);
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("B" + i);
        setTimeout(() => {
            console.log("C" + i);
        }, i * 500 + 500);
    }, i * 1000);
}
```
### Response
- B1
- B0
- B1
- B2
- C1
- A
- C2

## Problem 11
```
function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 500);
}
function second() {
    console.log("second");
}
first(second);
```
### Response
- first
- second