nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
const reduce = function(nums, fn, init) {
    let accum = init;
    for (let i = 0; i < nums.length ; i++) {
        accum = fn(accum, nums[i]);
    }
    return accum;
};

console.log(reduce(nums, fn, init))