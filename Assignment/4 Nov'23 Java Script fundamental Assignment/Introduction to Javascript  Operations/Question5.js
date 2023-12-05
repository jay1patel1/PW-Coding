let intrestcalculator = function (principal, rate, time) {
    if (
        typeof principal !== "number" ||
        typeof rate !== "number" ||
        typeof time !== "number" ||
        rate < 0 ||
        rate > 15
    ) {
        return "Invalid input";
    } else {
        let interest = (principal * rate * time) / 100;
        return interest;
    }
};

//  Units: Principal = INR, Rate = %, Time = Year

console.log(intrestcalculator(534000, 15, 2));
