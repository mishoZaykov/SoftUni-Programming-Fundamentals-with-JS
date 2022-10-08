function signCheck(numOne, numTwo, numThree) {
  let isPositive = true;
  if(numOne < 0 && numTwo >= 0 && numThree >= 0){
    isPositive = false;
  }else if(numOne >= 0 && numTwo < 0 && numThree >= 0){
    isPositive = false;
  }else if(numOne >= 0 && numTwo >= 0 && numThree < 0){
    isPositive = false;
  }else if(numOne < 0 && numTwo < 0 && numThree < 0){
    isPositive = false;
  }
  if (isPositive){
    console.log('Positive');
  }else{
    console.log('Negative');
  }
}signCheck(-5, 1, 1)