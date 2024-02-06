let a = "aabb"
let firstUniqChar = function(s) {

    let masterArray = s;
    let uniqChar

    for (let i = 0; i < masterArray.length; i++) {
        let checkKey = masterArray[i]
        let count = 0;
        for (let j = 0; j < masterArray.length; j++){
            let item = masterArray[j];
            if (masterArray[j] === checkKey) {
                count++
            }
        }
        if (count < 2) {
            uniqChar = masterArray[i]
            return (i)
        }
    }
    return -1;
}

firstUniqChar(a);