function outerFunction (parameter) {
    const outerVariable = 123
    const para = parameter;
    function inner () {
        console.log(`This is parameter give - ${para}`)
        console.log(`This is variable declared - ${outerVariable}`)
    }
    return inner;
}

let a = outerFunction(10);
a();