function sortNumbers(firstNumber, secondNumber, thirdNumber) {
  let numbers = [firstNumber, secondNumber, thirdNumber]
  let highestNumber = numbers.sort((a,b) => b-a);
  console.log(highestNumber);
}sortNumbers(2, 1, 3)