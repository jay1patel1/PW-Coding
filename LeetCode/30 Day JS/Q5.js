function fn (n,i) {
    return 42;
};

let arr = [1,2,3];

const map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i],i);
    };
    return arr;
};

let a = map(arr,fn);
console.log(a);