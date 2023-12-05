let circleAreaCalculator = function (r) {
    if (
        typeof r !== "number"
    ) {
        return "Invalid input";
    } else {
        let area = Math.PI * (r**2);
        return area;
    }
};

console.log(circleAreaCalculator(120));
