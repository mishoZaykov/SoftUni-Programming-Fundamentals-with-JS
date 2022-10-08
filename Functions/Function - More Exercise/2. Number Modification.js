function numberModification(num) {
  let result = 0;
  let numString = num.toString();

  while(result / numString.length <= 5){

    for(let i = 0; i < numString.length; i++){
      result += Number(numString[i]);
    }
    if(result/ numString.length < 5){
      numString += 9;
      result = 0
    }else {
      break;
    }
  }
  console.log(numString);
}numberModification(101)