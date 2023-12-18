arr = [1,2,3]
fn = function firstIndex(n, i) { return i === 0; }
const filter = function(arr, fn) {
    let returnArray = [];
    for (let i = 0; i < arr.length ; i++) {
        if (fn(arr[i],i)) {
            returnArray.push(arr[i]);
        }
    }
    return returnArray;
};

console.log(filter(arr, fn));