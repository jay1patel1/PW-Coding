function getOddNumbers (length) {
    return Array.from({length}, (element, i) => (((i+1) * 2) - 1));
}

console.log(getOddNumbers(2))

// let a = Array.from({ 3 })