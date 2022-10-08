function addAndSutract(firstNum, secondNum, lastNum) {
  
  function add(firstNum,secondNum){
    let sumOfTwonumbers = firstNum + secondNum;
    return sumOfTwonumbers;
  }

  let sum = add(firstNum,secondNum)

  function subtract(sumOfTwo, lastNum) {
    return sumOfTwo - lastNum;
  }
  let result = subtract(sum, lastNum)
  console.log(result);
}
addAndSutract(23, 6, 10)