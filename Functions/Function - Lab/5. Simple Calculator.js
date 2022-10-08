function simpleCalculator(firstNumber, secondNumber, operator) {
  let result = 0;

  let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
  let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;
  let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
  let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

  switch (operator) {
    case "multiply":
      result = multiply(firstNumber, secondNumber);
      break;
    case "divide":
      result = divide(firstNumber, secondNumber);
      break;
    case "add":
      result = add(firstNumber, secondNumber);
      break;
    case "subtract":
      result = subtract(firstNumber, secondNumber);
      break;
  }
  console.log(result);
}
simpleCalculator(5, 5, "multiply");
