let findvaluepositiveornegative = function (inputvalue) {
  let value = {
    value: inputvalue,
    ispositive: false,
    isnegative: false,
    iszero: false,
    isnumber: false,
  };
  
  // Check if the input value is a number
  let checkisnumber =
    typeof value.value !== "number"
      ? (value.isnumber = false)
      : (value.isnumber = true);
  
  // Check if the input value is positive, negetive or zero
  let nestedcheck = value.isnumber
    ? value.value > 0
      ? (value.ispositive = true)
      : value.value < 0
      ? (value.isnegative = true)
      : (value.iszero = true)
    : console.log("Please enter the number value");

  // Print the result
  console.log(
    `The given value ${value.value} is ${value.ispositive ? "positive" : ""}${
      value.isnegative ? "negative" : ""
    }${value.iszero ? "zero" : ""}`
  );
};

findvaluepositiveornegative(0);
findvaluepositiveornegative(5);
findvaluepositiveornegative(-5);
