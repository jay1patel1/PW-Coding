function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time);
        }, time);
    });
}

const resolver = (val) => {
    console.log("Resolving with", val);
    return 20;
};
const rejector = (val) => console.log("Rejecting with", val);

const a = createPromise(10000);


a
.then((value) => {
    console.log("Value in first then", value);
    return value*2;
})
.then((value) => {
    console.log("Value in second then", value);
    return value*2;
})
.then((value) => {
    console.log("Value in third then", value);
    return value*2;
})