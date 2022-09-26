function calculator(firstNumber, operator, secondNumebr) {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumebr;
    break;
    case '-':
      result = firstNumber - secondNumebr;
    break;
    case '*':
      result = firstNumber * secondNumebr;
    break;
    case '/':
      result = firstNumber / secondNumebr;
    break;
  }
  console.log(result.toFixed(2));

}calculator(5,'+', 10)