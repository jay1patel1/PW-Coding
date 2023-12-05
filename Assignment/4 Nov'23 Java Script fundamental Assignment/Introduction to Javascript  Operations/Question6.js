let bMIcalculator = function (weight, height) {
    if (
        typeof weight !== "number" ||
        typeof height !== "number"
    ) {
        return "Invalid input";
    } else {
        let bMI = weight/(height**2);
        return bMI;
    }
};

//  Units: Wight = Kg, Height = in.

console.log(bMIcalculator(120, 5.8));
