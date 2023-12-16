const expect = function(val) {
    let returnObject = {
        toBe: function toBeCheck(params) {
            if (params === val) {
                return true;
            } else {
                throw new Error ("Not Equal");
            }
        },
        notToBe: function name(params) {
            if (params !== val) {
                return true;
            } else {
                return "Equal";
            }
        }
    }
    return returnObject;
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
console.log(expect(5).toBe(null));