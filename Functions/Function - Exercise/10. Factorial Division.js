function factorialDivision(firstNumber, secondNumber) {
  return (factorial(firstNumber) /factorial(secondNumber)).toFixed(2)

  function factorial(num) {
    let factorial = 1;
    for(let i = 1; i < num; i++){
      factorial *= i;
    }
    return factorial;
  }
}factorialDivision(6, 2)
num(5)