// Sanity Check + More Than Zero Function
const sanityCheck = (value) => {
  let input = value;

  if (typeof value !== "number") {
    input = parseInt(value);
    if (isNaN(value)) {
      console.log("Enter Valid Number");
      return;
    }
  } else if (value <= 0) {
    console.log(`Enter value bigger than zero`);
    return;
  }
  return input;
};

const factorialValue = (factInput) => {
  let checkedValue = sanityCheck(factInput);

  if (typeof checkedValue === "undefined") {
    return;
  }

  function factorialCalc(param) {
    if (param === 0) {
      return 1;
    } else {
      return param * factorialCalc(param - 1);
    }
  }
  let retunValue = factorialCalc(checkedValue);
  console.log(`Factorial of ${checkedValue} is ${retunValue}`);
  return retunValue;
};

factorialValue(5);
// Factorial of 5 is 120
factorialValue("25");
// Factorial of 25 is 1.5511210043330986e+25
factorialValue("a");
// Enter Valid Number
factorialValue(-1);
// Enter value bigger than zero
