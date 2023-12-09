function calculateTax(income) {
    const userDetail = {
        userIncome: income,
        taxSlabWise: [],
        tax: [],
        userTotalTax: 0
    }

    function taxCalculation() {
        let taxableIncome = userDetail.userIncome;
        let tax = 0;
        const taxConstant = 300000;
        function slabTaxCalculation(value,percentage) {
            const slabTax = (value * percentage) / 100;
            userDetail.taxSlabWise.push(slabTax);
            userDetail.tax.push(tax);
        }
        while (tax < 30) {
            if (taxableIncome>taxConstant){
                slabTaxCalculation(taxConstant,tax);
                taxableIncome = taxableIncome - taxConstant;
            } else {
                slabTaxCalculation(taxableIncome,tax);
                break
            }
            if (tax < 20) {
                tax = tax + 5;
            } else {
                tax = tax + 10;
            }
        }
        (taxableIncome > 0 && tax > 20) ? slabTaxCalculation(taxableIncome,tax) : undefined;
    }
    taxCalculation();
    console.log(`Your total taxable income is ${userDetail.userIncome < 300000 ? "None" : userDetail.userIncome - 300000}`);

    if (userDetail.userIncome > 300000) {
        for (let i = 1; i < userDetail.taxSlabWise.length; i++) {
            console.log(`Your slab-${i}(${userDetail.tax[i]}%) tax is ${userDetail.taxSlabWise[i]}`);
        }
    }
}
calculateTax(2100000);
// Result
// Your total taxable income is 1800000
// Your slab-1(5%) tax is 15000
// Your slab-2(10%) tax is 30000
// Your slab-3(15%) tax is 45000
// Your slab-4(20%) tax is 60000
// Your slab-5(30%) tax is 180000

calculateTax(202000);
// Result
// Your total taxable income is None
// Your slab-1(5%) tax is 25

calculateTax(300500);
// Result
// Your total taxable income is 500

calculateTax(501500);
// Result
// Your total taxable income is 201500
// Your slab-1(5%) tax is 10075

calculateTax(725500);
// Result
// Your total taxable income is 425500
// Your slab-1(5%) tax is 15000
// Your slab-2(10%) tax is 12550

calculateTax(1080500);
// Result
// Your total taxable income is 780500
// Your slab-1(5%) tax is 15000
// Your slab-2(10%) tax is 30000
// Your slab-3(15%) tax is 27075

calculateTax(1398200);
// Result
// Your total taxable income is 1098200
// Your slab-1(5%) tax is 15000
// Your slab-2(10%) tax is 30000
// Your slab-3(15%) tax is 45000
// Your slab-4(20%) tax is 39640

calculateTax(1760900);
// Result
// Your total taxable income is 1460900
// Your slab-1(5%) tax is 15000
// Your slab-2(10%) tax is 30000
// Your slab-3(15%) tax is 45000
// Your slab-4(20%) tax is 60000
// Your slab-5(30%) tax is 78270

calculateTax(3442700);
// Result
// Your total taxable income is 3142700
// Your slab-1(5%) tax is 15000
// Your slab-2(10%) tax is 30000
// Your slab-3(15%) tax is 45000
// Your slab-4(20%) tax is 60000
// Your slab-5(30%) tax is 582810